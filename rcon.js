@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  --blue-dark: #0a1628;
  --blue-mid: #1e3a5f;
  --blue-bright: #2563eb;
  --blue-light: #3b82f6;
  --blue-pale: #dbeafe;
  --white: #ffffff;
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-400: #9ca3af;
  --gray-600: #4b5563;
  --gray-800: #1f2937;
  --black: #0a0a0a;
  --red: #ef4444;
  --green: #22c55e;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--gray-50);
  color: var(--gray-800);
  min-height: 100vh;
}

a {
  text-decoration: none;
  color: inherit;
}

/* ── Top Nav ── */
.top-nav {
  background: var(--blue-dark);
  padding: 0 2rem;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

.top-nav a {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.82rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.2s;
}

.top-nav a:hover {
  color: var(--white);
}

.top-nav a.active {
  color: var(--white);
}

.top-nav .nav-btn {
  background: var(--blue-bright);
  color: var(--white);
  padding: 0.35rem 1rem;
  border-radius: 6px;
  font-weight: 600;
}

.top-nav .nav-btn:hover {
  background: var(--blue-light);
}

.top-nav .nav-register {
  background: var(--blue-bright);
  color: var(--white);
  padding: 0.35rem 1.2rem;
  border-radius: 20px;
  font-weight: 600;
  margin-left: auto;
  position: absolute;
  right: 2rem;
}

.top-nav .nav-login {
  background: var(--blue-pale);
  color: var(--blue-bright);
  padding: 0.35rem 1.2rem;
  border-radius: 20px;
  font-weight: 600;
  position: absolute;
  right: 8.5rem;
  font-size: 0.82rem;
}

.top-nav .nav-login:hover {
  background: #bfdbfe;
}

/* ── Hero ── */
.hero {
  background: linear-gradient(135deg, #0f2744 0%, #1e40af 50%, #2563eb 100%);
  position: relative;
  padding: 3rem 2rem 5rem;
  overflow: hidden;
  min-height: 280px;
}

.hero::before {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cpath d='M350 300 L350 120 Q340 80 300 90 L280 60 Q260 30 240 50 L220 20 Q200 0 180 30 L160 10 Q140 0 130 40 L110 30 Q90 20 80 60 L60 50 Q40 40 30 80 L10 70 L10 300 Z' fill='rgba(0,0,0,0.3)'/%3E%3C/svg%3E") no-repeat right bottom;
  background-size: contain;
  opacity: 0.6;
}

.hero-content {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.hero-logo {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  border: 4px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.hero-badge {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(37, 99, 235, 0.8);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.hero-user {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-size: 0.85rem;
}

.hero-user .avatar {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background: #6b7280;
}

/* ── Wave Divider ── */
.wave-divider {
  background: white;
  margin-top: -2px;
  position: relative;
  z-index: 2;
}

.wave-divider svg {
  display: block;
  width: 100%;
  height: 40px;
}

.wave-bar {
  background: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  border-bottom: 1px solid var(--gray-200);
}

.wave-bar-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.wave-bar-item .label {
  font-size: 0.7rem;
  color: var(--gray-400);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.wave-bar-item .value {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--blue-bright);
}

.wave-bar-btn {
  background: var(--blue-pale);
  color: var(--blue-bright);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  transition: background 0.2s;
}

.wave-bar-btn:hover {
  background: #bfdbfe;
}

/* ── Main Content ── */
.main-content {
  background: var(--gray-50);
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d1d5db' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  padding: 2rem;
  min-height: 400px;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.breadcrumb {
  background: white;
  padding: 0.8rem 1.2rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  font-size: 0.85rem;
  color: var(--gray-400);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.breadcrumb span {
  color: var(--gray-800);
  font-weight: 600;
}

/* ── Cards Grid ── */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
}

.card-item {
  background: white;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.card-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.15);
}

.card-item .icon {
  font-size: 2.5rem;
  margin-bottom: 0.8rem;
}

.card-item h3 {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--gray-800);
}

/* ── Welcome Section ── */
.welcome-section {
  text-align: center;
  padding: 3rem 1rem;
}

.welcome-section h1 {
  font-size: 2rem;
  font-weight: 800;
  color: var(--blue-dark);
  margin-bottom: 0.5rem;
}

.welcome-section p {
  color: var(--gray-600);
  font-size: 1rem;
  margin-bottom: 2rem;
}

.welcome-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn-primary {
  background: var(--blue-bright);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.95rem;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-primary:hover {
  background: var(--blue-light);
}

.btn-secondary {
  background: var(--blue-pale);
  color: var(--blue-bright);
  padding: 0.8rem 2rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.95rem;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-secondary:hover {
  background: #bfdbfe;
}

/* ── Recent Registrations Bar ── */
.recent-bar {
  display: flex;
  margin-top: 2rem;
}

.recent-bar-left {
  background: var(--blue-bright);
  color: white;
  padding: 1.5rem 2rem;
  flex: 0 0 280px;
}

.recent-bar-left h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
}

.recent-bar-left p {
  font-size: 0.75rem;
  opacity: 0.85;
}

.recent-bar-right {
  background: var(--blue-dark);
  flex: 1;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  overflow-x: auto;
}

.recent-user {
  text-align: center;
  color: white;
  min-width: 80px;
}

.recent-user .avatar {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  margin: 0 auto 0.4rem;
  display: block;
}

.recent-user .name {
  font-size: 0.75rem;
  font-weight: 600;
}

.recent-user .time {
  font-size: 0.65rem;
  opacity: 0.6;
  text-transform: uppercase;
}

/* ── Footer ── */
.footer {
  background: var(--black);
  color: rgba(255, 255, 255, 0.7);
  padding: 3rem 2rem 1.5rem;
}

.footer-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer h4 {
  color: white;
  font-size: 0.85rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer p {
  font-size: 0.8rem;
  line-height: 1.6;
}

.footer ul {
  list-style: none;
}

.footer ul li {
  margin-bottom: 0.5rem;
}

.footer ul a {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.2s;
}

.footer ul a:hover {
  color: white;
}

.footer-bottom {
  max-width: 1100px;
  margin: 0 auto;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.footer-social a {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.1rem;
  transition: color 0.2s;
}

.footer-social a:hover {
  color: white;
}

/* ── Registration Page ── */
.register-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: var(--gray-100);
}

.register-container {
  display: flex;
  max-width: 960px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  min-height: 580px;
}

.register-left {
  flex: 1;
  background: linear-gradient(135deg, #1a3a2a 0%, #2d5a3d 30%, #1a2e1a 70%, #0d1f0d 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2.5rem;
  color: white;
}

.register-left::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 30% 60%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 30%, rgba(234, 179, 8, 0.1) 0%, transparent 40%),
    radial-gradient(ellipse at 50% 80%, rgba(0, 0, 0, 0.4) 0%, transparent 60%);
}

.register-left h2 {
  font-size: 2rem;
  font-weight: 800;
  position: relative;
  z-index: 1;
}

.register-left p {
  font-size: 0.9rem;
  opacity: 0.85;
  margin-top: 0.5rem;
  position: relative;
  z-index: 1;
}

.register-right {
  flex: 1;
  background: white;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d1d5db' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  padding: 2.5rem;
  position: relative;
}

.register-back {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: var(--gray-100);
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.8rem;
  color: var(--gray-600);
  display: flex;
  align-items: center;
  gap: 0.3rem;
  transition: background 0.2s;
}

.register-back:hover {
  background: var(--gray-200);
}

.register-right h2 {
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--gray-800);
  margin-bottom: 0.3rem;
}

.register-right .subtitle {
  color: var(--gray-400);
  font-size: 0.85rem;
  margin-bottom: 1.8rem;
}

.form-group {
  margin-bottom: 1rem;
  position: relative;
}

.form-group .input-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--blue-bright);
  font-size: 0.9rem;
}

.form-group input {
  width: 100%;
  padding: 0.85rem 1rem 0.85rem 2.8rem;
  border: 1.5px solid var(--gray-200);
  border-radius: 10px;
  font-size: 0.9rem;
  font-family: inherit;
  transition: border-color 0.2s;
  outline: none;
}

.form-group input:focus {
  border-color: var(--blue-bright);
}

.form-checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1.2rem 0;
  font-size: 0.82rem;
  color: var(--gray-600);
}

.form-checkbox input {
  accent-color: var(--blue-bright);
  width: 16px;
  height: 16px;
}

.form-buttons {
  display: flex;
  gap: 0.8rem;
  margin-top: 1.5rem;
}

.form-buttons .btn-primary,
.form-buttons .btn-secondary {
  flex: 1;
  text-align: center;
  padding: 0.9rem;
}

.form-message {
  padding: 0.8rem;
  border-radius: 8px;
  font-size: 0.85rem;
  margin-bottom: 1rem;
  display: none;
}

.form-message.success {
  display: block;
  background: #dcfce7;
  color: #166534;
}

.form-message.error {
  display: block;
  background: #fee2e2;
  color: #991b1b;
}

.register-powered {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.75rem;
  color: var(--gray-400);
}

/* ── Data Table ── */
.data-table-wrap {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  overflow: hidden;
}

.data-table-header {
  padding: 1.2rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--gray-200);
}

.data-table-header h2 {
  font-size: 1.1rem;
  font-weight: 700;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th {
  text-align: left;
  padding: 0.8rem 1.5rem;
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--gray-400);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid var(--gray-200);
}

.data-table td {
  padding: 0.8rem 1.5rem;
  font-size: 0.85rem;
  border-bottom: 1px solid var(--gray-100);
}

.data-table .user-cell {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.data-table .user-cell img {
  width: 28px;
  height: 28px;
  border-radius: 4px;
}

.empty-state {
  text-align: center;
  padding: 3rem;
  color: var(--red);
  font-size: 0.9rem;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .register-container {
    flex-direction: column;
  }

  .register-left {
    min-height: 200px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }

  .recent-bar {
    flex-direction: column;
  }

  .recent-bar-left {
    flex: none;
  }

  .top-nav {
    gap: 1rem;
    font-size: 0.75rem;
  }

  .top-nav .nav-register {
    position: static;
    margin-left: 0;
  }
}
