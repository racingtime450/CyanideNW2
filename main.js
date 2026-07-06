const token = localStorage.getItem('cnw_admin_token');
const admin = JSON.parse(localStorage.getItem('cnw_admin') || 'null');

let selectedSupportId = null;
let selectedSupportStatus = null;
let adminChatPoll = null;
let verifiedApplicationCode = null;

const sections = {
  orders: document.getElementById('ordersSection'),
  support: document.getElementById('supportSection'),
  applications: document.getElementById('applicationsSection'),
  punishments: document.getElementById('punishmentsSection'),
  admins: document.getElementById('adminsSection'),
};

function api(path, options = {}) {
  return fetch(path, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...(options.headers || {}),
    },
  }).then(async (res) => {
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || 'İşlem başarısız.');
    return data;
  });
}

function has(permission) {
  return admin?.permissions?.includes(permission);
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }[char]));
}

function formatDate(value) {
  return value ? new Date(value).toLocaleString('tr-TR') : '-';
}

function statusLabel(status) {
  const labels = {
    open: 'Bekliyor',
    active: 'Canlı sohbet',
    paused: 'Beklemede',
    closed: 'Sonlandı',
    answered: 'Cevaplandı',
    accepted_pending_code: 'Kod bekliyor',
    code_saved: 'Kod kaydedildi',
  };
  return labels[status] || status || '-';
}

function showMessage(el, text, type = 'success') {
  if (!el) return;
  el.textContent = text;
  el.className = `form-note ${type}`;
}

function showSection(name) {
  Object.entries(sections).forEach(([key, el]) => {
    if (el) el.hidden = key !== name;
  });
  document.querySelectorAll('.admin-nav-button[data-section]').forEach((button) => {
    button.classList.toggle('active', button.dataset.section === name);
  });
}

function requireAdmin() {
  if (!token || !admin) {
    location.href = '/login.html';
    return false;
  }

  document.getElementById('adminWelcome').textContent =
    `${admin.displayName} (${admin.role === 'full' ? 'Tam admin' : 'Yetkili'})`;

  document.querySelectorAll('.admin-nav-button[data-section]').forEach((button) => {
    const allowed = has(button.dataset.section);
    button.hidden = !allowed;
    button.addEventListener('click', () => showSection(button.dataset.section));
  });

  const first = ['orders', 'support', 'applications', 'punishments', 'admins'].find(has);
  showSection(first);
  return true;
}

function renderChatMessages(container, messages = []) {
  container.innerHTML = messages.map((message) => `
    <div class="chat-bubble ${message.sender_type === 'admin' ? 'mine' : message.sender_type === 'system' ? 'system' : 'theirs'}">
      <strong>${escapeHtml(message.sender_name || 'Sistem')}</strong>
      <p>${escapeHtml(message.text)}</p>
      <small>${formatDate(message.created_at)}</small>
    </div>
  `).join('');
  container.scrollTop = container.scrollHeight;
}

function renderAdminChat(ticket) {
  selectedSupportId = ticket.id;
  selectedSupportStatus = ticket.status;
  document.getElementById('adminChatTitle').textContent = ticket.title;
  document.getElementById('adminChatStatus').textContent = statusLabel(ticket.status);
  renderChatMessages(document.getElementById('adminChatMessages'), ticket.messages || []);

  const input = document.getElementById('adminChatInput');
  const sendButton = document.querySelector('#adminChatForm button');
  const canWrite = ticket.status === 'active';
  input.disabled = !canWrite;
  sendButton.disabled = !canWrite;
  input.placeholder = canWrite ? 'Kullanıcıya mesaj yaz...' : 'Sohbeti başlatınca mesaj yazabilirsin.';

  document.getElementById('adminStartChat').disabled = ticket.status === 'active' || ['closed', 'answered'].includes(ticket.status);
  document.getElementById('adminPauseChat').disabled = ['closed', 'answered'].includes(ticket.status);
  document.getElementById('adminCloseChat').disabled = ['closed', 'answered'].includes(ticket.status);
}

async function openAdminSupportChat(id) {
  const data = await api(`/api/admin/support-tickets/${encodeURIComponent(id)}`);
  renderAdminChat(data.ticket);
  if (adminChatPoll) clearInterval(adminChatPoll);
  adminChatPoll = setInterval(refreshAdminSupportChat, 4000);
}

async function refreshAdminSupportChat() {
  if (!selectedSupportId) return;
  try {
    const data = await api(`/api/admin/support-tickets/${encodeURIComponent(selectedSupportId)}`);
    renderAdminChat(data.ticket);
    if (['paused', 'closed', 'answered'].includes(data.ticket.status)) {
      loadSupportTickets();
      loadSupportHistory();
    }
  } catch {
    selectedSupportId = null;
  }
}

async function loadOrders() {
  if (!has('orders')) return;
  const rows = document.getElementById('ordersRows');
  const empty = document.getElementById('ordersEmpty');
  const data = await api('/api/admin/orders');
  rows.innerHTML = data.orders.map((order) => `
    <tr>
      <td>${escapeHtml(order.merchant_oid)}</td>
      <td>${escapeHtml(order.minecraft_username || '-')}</td>
      <td>${escapeHtml(order.product?.name || '-')}</td>
      <td>${escapeHtml(order.product?.priceTl || 0)} TL</td>
      <td>${escapeHtml(order.status)}</td>
      <td>${formatDate(order.created_at)}</td>
    </tr>
  `).join('');
  empty.hidden = data.orders.length > 0;
}

async function loadSupportTickets() {
  if (!has('support')) return;
  const list = document.getElementById('supportTicketList');
  const empty = document.getElementById('supportTicketEmpty');
  const data = await api('/api/admin/support-tickets');
  empty.hidden = data.tickets.length > 0;
  list.innerHTML = data.tickets.map((ticket) => `
    <article class="ticket-card application-card">
      <strong>${escapeHtml(ticket.title)}</strong>
      <span>${escapeHtml(ticket.problem)}</span>
      <small>${escapeHtml(ticket.user_username || ticket.user_email || 'Kullanıcı')} · ${escapeHtml(statusLabel(ticket.status))} · ${formatDate(ticket.created_at)}</small>
      <button class="btn-primary small-button open-support-chat" type="button" data-id="${escapeHtml(ticket.id)}">${ticket.status === 'active' ? 'Sohbete gir' : 'Sohbeti başlat'}</button>
    </article>
  `).join('');

  list.querySelectorAll('.open-support-chat').forEach((button) => {
    button.addEventListener('click', async () => {
      try {
        if (button.textContent.includes('başlat')) {
          const started = await api(`/api/admin/support-tickets/${encodeURIComponent(button.dataset.id)}/start`, { method: 'POST' });
          renderAdminChat(started.ticket);
          await loadSupportTickets();
        } else {
          await openAdminSupportChat(button.dataset.id);
        }
      } catch (err) {
        showMessage(document.getElementById('supportReplyMessage'), err.message, 'error');
      }
    });
  });
}

async function loadSupportHistory() {
  if (!has('support')) return;
  const list = document.getElementById('supportHistoryList');
  const empty = document.getElementById('supportHistoryEmpty');
  const data = await api('/api/admin/support-history');
  empty.hidden = data.tickets.length > 0;
  list.innerHTML = data.tickets.map((ticket) => `
    <article class="ticket-card history-card">
      <strong>${escapeHtml(ticket.title)}</strong>
      <span><b>Kullanıcı:</b> ${escapeHtml(ticket.user_username || ticket.user_email || 'Kullanıcı')}</span>
      <span><b>Durum:</b> ${escapeHtml(statusLabel(ticket.status))}</span>
      ${ticket.pause_reason ? `<span><b>Bekleme notu:</b> ${escapeHtml(ticket.pause_reason)}</span>` : ''}
      ${ticket.wait_minutes ? `<span><b>Bekleme:</b> ${escapeHtml(ticket.wait_minutes)} dakika</span>` : ''}
      ${ticket.user_rating ? `<span><b>Değerlendirme:</b> ${escapeHtml(ticket.user_rating)}</span>` : ''}
      <small>${formatDate(ticket.paused_at || ticket.closed_at || ticket.answered_at || ticket.created_at)}</small>
      <button class="btn-secondary small-button open-support-history" type="button" data-id="${escapeHtml(ticket.id)}">Geçmişi gör</button>
    </article>
  `).join('');

  list.querySelectorAll('.open-support-history').forEach((button) => {
    button.addEventListener('click', () => openAdminSupportChat(button.dataset.id).catch((err) => {
      showMessage(document.getElementById('supportReplyMessage'), err.message, 'error');
    }));
  });
}

async function acceptApplication(id) {
  if (!confirm('Bu başvuruyu kabul etmek istediğinize emin misiniz?')) return;
  const message = document.getElementById('applicationCodeMessage');
  try {
    const data = await api(`/api/admin/applications/${encodeURIComponent(id)}/accept`, {
      method: 'POST',
      body: JSON.stringify({ confirmed: true }),
    });
    showMessage(message, `Başvuru kabul edildi. Kod: ${data.application.verification_code}`);
    await Promise.all([loadApplications(), loadPendingCodes()]);
  } catch (err) {
    showMessage(message, err.message, 'error');
  }
}

async function loadApplications() {
  if (!has('applications')) return;
  const list = document.getElementById('applicationList');
  const empty = document.getElementById('applicationEmpty');
  const data = await api('/api/admin/applications');
  empty.hidden = data.applications.length > 0;
  list.innerHTML = data.applications.map((application) => `
    <article class="ticket-card application-card">
      <strong>${escapeHtml(application.username)} · ${escapeHtml(application.discord)}</strong>
      <span>${escapeHtml(application.reason)}</span>
      <small>Başvuran: ${escapeHtml(application.user_username || application.user_email || '-')} · Yaş: ${escapeHtml(application.age)} · ${formatDate(application.created_at)}</small>
      <button class="btn-primary small-button accept-application" type="button" data-id="${escapeHtml(application.id)}">Kabul et</button>
    </article>
  `).join('');

  list.querySelectorAll('.accept-application').forEach((button) => {
    button.addEventListener('click', () => acceptApplication(button.dataset.id));
  });
}

async function loadPendingCodes() {
  if (!has('applications')) return;
  const list = document.getElementById('pendingCodeList');
  const empty = document.getElementById('pendingCodeEmpty');
  const data = await api('/api/admin/applications/pending-codes');
  empty.hidden = data.applications.length > 0;
  list.innerHTML = data.applications.map((application) => `
    <article class="ticket-card history-card">
      <strong>${escapeHtml(application.username)} · ${escapeHtml(application.discord)}</strong>
      <span>Kod: <b>${escapeHtml(application.verification_code)}</b></span>
      <small>${escapeHtml(application.answered_by || '-')} kabul etti · ${formatDate(application.answered_at)}</small>
    </article>
  `).join('');
}

async function loadApplicationCodes() {
  if (!has('applications')) return;
  const list = document.getElementById('applicationCodeHistory');
  const empty = document.getElementById('applicationCodeHistoryEmpty');
  const data = await api('/api/admin/application-codes');
  empty.hidden = data.codes.length > 0;
  list.innerHTML = data.codes.map((record) => `
    <article class="ticket-card history-card">
      <strong>${escapeHtml(record.code)} · ${escapeHtml(record.username)}</strong>
      <span>Discord: ${escapeHtml(record.discord || '-')}</span>
      <small>${escapeHtml(record.saved_by || '-')} kaydetti · ${formatDate(record.saved_at)}</small>
    </article>
  `).join('');
}

function renderVerifiedCode(application) {
  const result = document.getElementById('applicationCodeResult');
  result.innerHTML = `
    <article class="ticket-card history-card active">
      <strong>Kod doğru: ${escapeHtml(application.code)}</strong>
      <span>Gönderilen kişi: ${escapeHtml(application.username)} · ${escapeHtml(application.discord)}</span>
      <small>Durum: ${escapeHtml(statusLabel(application.status))}${application.code_saved ? ' · daha önce kaydedilmiş' : ''}</small>
    </article>
  `;
}

async function loadPunishments() {
  if (!has('punishments')) return;
  const list = document.getElementById('punishmentList');
  const data = await api('/api/admin/punishments');
  list.innerHTML = data.punishments.slice(0, 8).map((item) => `
    <div class="info-card">
      <h3>${escapeHtml(item.type.toUpperCase())} - ${escapeHtml(item.username)}</h3>
      <p>${escapeHtml(item.reason)}</p>
      <p><strong>${escapeHtml(item.staff)}</strong> · ${formatDate(item.created_at)}</p>
    </div>
  `).join('') || '<div class="info-card"><h3>Kayıt yok</h3><p>Henüz ceza kaydı girilmedi.</p></div>';
}

async function loadAdmins() {
  if (!has('admins')) return;
  const list = document.getElementById('adminList');
  const data = await api('/api/admin/admins');
  list.innerHTML = data.admins.map((item) => `
    <div class="info-card">
      <h3>${escapeHtml(item.displayName)}</h3>
      <p>Giriş adı: ${escapeHtml(item.username)}</p>
      <p>Yetki: ${item.role === 'full' ? 'Tam admin' : 'Destek + ceza'}</p>
    </div>
  `).join('');
}

function bindForms() {
  document.getElementById('adminLogout').addEventListener('click', () => {
    localStorage.removeItem('cnw_admin');
    localStorage.removeItem('cnw_admin_token');
    location.href = '/login.html';
  });

  document.getElementById('refreshOrders')?.addEventListener('click', loadOrders);
  document.getElementById('refreshSupport')?.addEventListener('click', () => {
    loadSupportTickets();
    loadSupportHistory();
  });
  document.getElementById('refreshSupportHistory')?.addEventListener('click', loadSupportHistory);
  document.getElementById('refreshApplications')?.addEventListener('click', loadApplications);
  document.getElementById('refreshPendingCodes')?.addEventListener('click', loadPendingCodes);
  document.getElementById('refreshApplicationCodes')?.addEventListener('click', loadApplicationCodes);

  document.getElementById('adminStartChat')?.addEventListener('click', async () => {
    const message = document.getElementById('supportReplyMessage');
    if (!selectedSupportId) return showMessage(message, 'Önce bir destek seçin.', 'error');
    try {
      const data = await api(`/api/admin/support-tickets/${encodeURIComponent(selectedSupportId)}/start`, { method: 'POST' });
      renderAdminChat(data.ticket);
      showMessage(message, 'Sohbet başlatıldı.');
      loadSupportTickets();
    } catch (err) {
      showMessage(message, err.message, 'error');
    }
  });

  document.getElementById('adminChatForm')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const message = document.getElementById('supportReplyMessage');
    if (!selectedSupportId || !adminChatInput.value.trim()) return;
    try {
      const data = await api(`/api/admin/support-tickets/${encodeURIComponent(selectedSupportId)}/messages`, {
        method: 'POST',
        body: JSON.stringify({ text: adminChatInput.value }),
      });
      adminChatInput.value = '';
      renderAdminChat(data.ticket);
      showMessage(message, '');
    } catch (err) {
      showMessage(message, err.message, 'error');
    }
  });

  document.getElementById('adminPauseChat')?.addEventListener('click', () => {
    const panel = document.getElementById('adminPausePanel');
    const message = document.getElementById('supportReplyMessage');
    if (!selectedSupportId) return showMessage(message, 'Önce bir destek seçin.', 'error');
    panel.hidden = !panel.hidden;
  });

  document.getElementById('adminPausePanel')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const message = document.getElementById('supportReplyMessage');
    if (!selectedSupportId) return showMessage(message, 'Önce bir destek seçin.', 'error');
    try {
      const data = await api(`/api/admin/support-tickets/${encodeURIComponent(selectedSupportId)}/pause`, {
        method: 'POST',
        body: JSON.stringify({
          user_rating: supportUserRating.value,
          wait_minutes: supportWaitMinutes.value,
          pause_reason: supportPauseReason.value,
        }),
      });
      renderAdminChat(data.ticket);
      event.target.hidden = true;
      showMessage(message, 'Sohbet beklemeye alındı.');
      await Promise.all([loadSupportTickets(), loadSupportHistory()]);
    } catch (err) {
      showMessage(message, err.message, 'error');
    }
  });

  document.getElementById('adminCloseChat')?.addEventListener('click', async () => {
    const message = document.getElementById('supportReplyMessage');
    if (!selectedSupportId) return showMessage(message, 'Önce bir destek seçin.', 'error');
    if (!confirm('Sohbeti sonlandırmak istediğinize emin misiniz?')) return;
    try {
      const data = await api(`/api/admin/support-tickets/${encodeURIComponent(selectedSupportId)}/close`, { method: 'POST' });
      renderAdminChat(data.ticket);
      showMessage(message, 'Sohbet sonlandırıldı.');
      await Promise.all([loadSupportTickets(), loadSupportHistory()]);
    } catch (err) {
      showMessage(message, err.message, 'error');
    }
  });

  document.getElementById('applicationCodeForm')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const code = applicationCodeInput.value.trim().toUpperCase();
    const message = document.getElementById('applicationCodeMessage');
    const saveButton = document.getElementById('saveApplicationCode');
    try {
      const data = await api('/api/admin/applications/verify-code', {
        method: 'POST',
        body: JSON.stringify({ code }),
      });
      verifiedApplicationCode = data.application.code;
      renderVerifiedCode(data.application);
      saveButton.disabled = Boolean(data.application.code_saved);
      showMessage(message, data.application.code_saved ? 'Kod doğru ama daha önce kaydedilmiş.' : 'Kod doğru. İsterseniz kaydedebilirsiniz.');
    } catch (err) {
      verifiedApplicationCode = null;
      saveButton.disabled = true;
      document.getElementById('applicationCodeResult').innerHTML = '';
      showMessage(message, err.message, 'error');
    }
  });

  document.getElementById('saveApplicationCode')?.addEventListener('click', async () => {
    const message = document.getElementById('applicationCodeMessage');
    if (!verifiedApplicationCode) return showMessage(message, 'Önce doğru bir kod doğrulayın.', 'error');
    try {
      const data = await api('/api/admin/applications/save-code', {
        method: 'POST',
        body: JSON.stringify({ code: verifiedApplicationCode }),
      });
      showMessage(message, `${data.record.code} kodu geçmişe kaydedildi.`);
      verifiedApplicationCode = null;
      applicationCodeInput.value = '';
      document.getElementById('saveApplicationCode').disabled = true;
      document.getElementById('applicationCodeResult').innerHTML = '';
      await Promise.all([loadPendingCodes(), loadApplicationCodes()]);
    } catch (err) {
      showMessage(message, err.message, 'error');
    }
  });

  document.getElementById('punishmentForm')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const message = document.getElementById('punishmentMessage');
    try {
      await api('/api/admin/punishments', {
        method: 'POST',
        body: JSON.stringify({
          type: punishmentType.value,
          username: punishmentUsername.value,
          reason: punishmentReason.value,
        }),
      });
      event.target.reset();
      showMessage(message, 'Ceza kaydı eklendi.');
      loadPunishments();
    } catch (err) {
      showMessage(message, err.message, 'error');
    }
  });

  document.getElementById('adminAddForm')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const message = document.getElementById('adminAddMessage');
    try {
      await api('/api/admin/admins', {
        method: 'POST',
        body: JSON.stringify({
          username: newAdminUsername.value,
          displayName: newAdminDisplayName.value,
          password: newAdminPassword.value,
          role: newAdminRole.value,
        }),
      });
      event.target.reset();
      showMessage(message, 'Admin hesabı eklendi.');
      loadAdmins();
    } catch (err) {
      showMessage(message, err.message, 'error');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (!requireAdmin()) return;
  bindForms();
  loadOrders().catch(() => {});
  loadSupportTickets().catch(() => {});
  loadSupportHistory().catch(() => {});
  loadApplications().catch(() => {});
  loadPendingCodes().catch(() => {});
  loadApplicationCodes().catch(() => {});
  loadPunishments().catch(() => {});
  loadAdmins().catch(() => {});
});
