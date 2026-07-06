@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  --blue-dark: #091427;
  --blue-mid: #15345b;
  --blue-bright: #2563eb;
  --blue-light: #3b82f6;
  --blue-pale: #dbeafe;
  --white: #ffffff;
  --gray-50: #f8fafc;
  --gray-100: #eef2f7;
  --gray-200: #dbe3ef;
  --gray-400: #8a99ad;
  --gray-600: #4b5d75;
  --gray-800: #172033;
  --black: #070b12;
  --red: #ef4444;
  --green: #22c55e;
  --shadow: 0 18px 45px rgba(15, 23, 42, 0.12);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  background: var(--gray-50);
  color: var(--gray-800);
  font-family: Inter, Arial, sans-serif;
  letter-spacing: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

.top-nav {
  min-height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0 1.5rem;
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(9, 20, 39, 0.94);
  box-shadow: 0 12px 35px rgba(9, 20, 39, 0.18);
  backdrop-filter: blur(14px);
}

.top-nav a {
  min-height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.9rem;
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.84rem;
  font-weight: 700;
  transition: background 180ms ease, color 180ms ease, transform 180ms ease;
}

.admin-nav-button {
  min-height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.9rem;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.84rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 180ms ease, color 180ms ease, transform 180ms ease;
}

.admin-nav-button:hover,
.admin-nav-button.active {
  background: rgba(255, 255, 255, 0.1);
  color: var(--white);
  transform: translateY(-1px);
}

.logout-button {
  background: rgba(239, 68, 68, 0.18);
  color: white;
}

.top-nav a:hover,
.top-nav a.active {
  background: rgba(255, 255, 255, 0.1);
  color: var(--white);
  transform: translateY(-1px);
}

.top-nav .nav-btn,
.top-nav .nav-register {
  background: var(--blue-bright);
  color: var(--white);
}

.top-nav .nav-login {
  background: var(--blue-pale);
  color: var(--blue-bright);
}

.hero {
  min-height: 310px;
  display: grid;
  place-items: center;
  overflow: hidden;
  position: relative;
  padding: 4rem 2rem 5rem;
  background:
    linear-gradient(120deg, rgba(59, 130, 246, 0.2), transparent 40%),
    linear-gradient(135deg, #0f2744 0%, #1e40af 52%, #2563eb 100%);
}

.hero::before {
  position: absolute;
  inset: 0;
  content: "";
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 46px 46px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.72), transparent);
}

.compact-hero {
  min-height: 220px;
}

.hero-content {
  width: min(1100px, 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.hero-logo {
  width: 138px;
  height: 138px;
  display: grid;
  place-items: center;
  border: 4px solid rgba(255, 255, 255, 0.28);
  border-radius: 50%;
  background: linear-gradient(135deg, #2563eb, #67e8f9);
  color: white;
  font-size: 2.6rem;
  font-weight: 800;
  box-shadow: 0 24px 65px rgba(0, 0, 0, 0.28);
  animation: logo-rise 560ms ease both;
}

.hero-badge,
.hero-user {
  position: absolute;
  top: 0;
  color: white;
  font-size: 0.85rem;
  font-weight: 700;
}

.hero-badge {
  left: 0;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  background: rgba(37, 99, 235, 0.85);
}

.hero-user {
  right: 0;
  display: flex;
  align-items: center;
  gap: 0.55rem;
}

.avatar {
  border-radius: 6px;
}

.profile-menu-root {
  position: relative;
  z-index: 120;
}

.profile-chip {
  min-height: 38px;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  border: 0;
  border-radius: 999px;
  padding: 0.28rem 0.75rem 0.28rem 0.35rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 10px 26px rgba(15, 23, 42, 0.1);
  transition: transform 180ms ease, background 180ms ease, box-shadow 180ms ease;
}

.profile-chip:hover,
.profile-menu-root.open .profile-chip {
  background: rgba(255, 255, 255, 0.18);
  transform: translateY(-1px);
  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.18);
}

.profile-chip .avatar {
  width: 30px;
  height: 30px;
}

.profile-popover {
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  width: 272px;
  overflow: hidden;
  border: 1px solid rgba(219, 227, 239, 0.9);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.94);
  color: var(--gray-800);
  box-shadow: 0 26px 70px rgba(15, 23, 42, 0.24);
  backdrop-filter: blur(18px);
  opacity: 0;
  pointer-events: none;
  transform: translateY(-8px) scale(0.96);
  transform-origin: top right;
  transition: opacity 180ms ease, transform 220ms cubic-bezier(0.2, 0.9, 0.2, 1);
}

.profile-menu-root.open .profile-popover {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0) scale(1);
}

.profile-popover-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.35rem;
  padding: 1rem;
}

.profile-menu-item,
.profile-logout {
  border: 0;
  background: transparent;
  color: var(--gray-800);
  text-align: center;
  cursor: pointer;
}

.profile-menu-item {
  min-height: 82px;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 0.25rem;
  border-radius: 14px;
  transition: background 160ms ease, transform 160ms ease;
}

.profile-menu-item:hover {
  background: var(--gray-100);
  transform: translateY(-1px);
}

.profile-menu-icon {
  width: 26px;
  height: 26px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--blue-pale);
  color: var(--blue-bright);
  font-size: 0.78rem;
  font-weight: 900;
}

.profile-menu-item strong {
  font-size: 0.88rem;
}

.profile-menu-item small {
  color: var(--gray-400);
  font-weight: 800;
}

.profile-logout {
  width: 100%;
  min-height: 54px;
  border-top: 1px solid var(--gray-200);
  color: var(--gray-600);
  font-weight: 800;
}

.profile-logout:hover {
  background: var(--gray-50);
  color: var(--red);
}

.profile-menu-hero .profile-popover {
  right: auto;
  left: 50%;
  transform-origin: top center;
  transform: translate(-50%, -8px) scale(0.96);
}

.profile-menu-hero.open .profile-popover {
  transform: translate(-50%, 0) scale(1);
}

.wave-divider {
  position: relative;
  z-index: 2;
  margin-top: -2px;
  background: white;
}

.wave-divider svg {
  width: 100%;
  height: 40px;
  display: block;
}

.wave-bar {
  width: min(1100px, calc(100% - 2rem));
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin: 0 auto;
  padding: 1.1rem 0;
  border-bottom: 1px solid var(--gray-200);
}

.wave-bar-item {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.label {
  color: var(--gray-400);
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
}

.value {
  margin-top: 0.2rem;
  color: var(--blue-bright);
  font-size: 0.9rem;
  font-weight: 800;
}

.wave-bar-btn,
.btn-primary,
.btn-secondary {
  border: 0;
  cursor: pointer;
  font-weight: 800;
  transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
}

.wave-bar-btn {
  min-height: 40px;
  padding: 0 1rem;
  border-radius: 10px;
  background: var(--blue-pale);
  color: var(--blue-bright);
  font-size: 0.76rem;
}

.wave-bar-btn:hover,
.btn-primary:hover,
.btn-secondary:hover {
  transform: translateY(-2px);
}

.main-content {
  min-height: 400px;
  padding: 2.4rem 1rem;
  background:
    linear-gradient(180deg, white, transparent 18rem),
    var(--gray-50);
}

.container {
  width: min(1100px, 100%);
  margin: 0 auto;
}

.welcome-section {
  padding: 3rem 1rem;
  text-align: center;
}

.welcome-section h1 {
  color: var(--blue-dark);
  font-size: clamp(2rem, 5vw, 3.8rem);
  font-weight: 800;
  line-height: 1;
}

.welcome-section p {
  max-width: 660px;
  margin: 1rem auto 0;
  color: var(--gray-600);
  line-height: 1.7;
}

.welcome-buttons,
.form-buttons {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 1.6rem;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 1.5rem;
  border-radius: 12px;
}

.btn-primary {
  background: var(--blue-bright);
  color: white;
  box-shadow: 0 16px 30px rgba(37, 99, 235, 0.22);
}

.btn-secondary {
  background: var(--blue-pale);
  color: var(--blue-bright);
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.card-item {
  min-height: 168px;
  display: grid;
  place-items: center;
  gap: 0.65rem;
  padding: 1.4rem;
  border: 1px solid rgba(37, 99, 235, 0.08);
  border-radius: 16px;
  background: white;
  text-align: center;
  box-shadow: var(--shadow);
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.card-item:hover {
  border-color: rgba(37, 99, 235, 0.24);
  box-shadow: 0 22px 55px rgba(37, 99, 235, 0.16);
  transform: translateY(-4px);
}

.card-item .icon {
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--blue-pale), #ecfeff);
  color: var(--blue-bright);
  font-weight: 800;
}

.card-item h3 {
  font-size: 0.94rem;
}

.recent-bar {
  display: flex;
}

.recent-bar-left {
  flex: 0 0 280px;
  padding: 1.4rem 2rem;
  background: var(--blue-bright);
  color: white;
}

.recent-bar-left h3 {
  font-size: 1rem;
}

.recent-bar-left p {
  margin-top: 0.3rem;
  font-size: 0.78rem;
  opacity: 0.86;
}

.recent-bar-right {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  overflow-x: auto;
  padding: 1rem 2rem;
  background: var(--blue-dark);
}

.recent-user {
  min-width: 78px;
  color: white;
  text-align: center;
}

.recent-user .name {
  margin-top: 0.35rem;
  font-size: 0.76rem;
  font-weight: 700;
}

.recent-user .time {
  margin-top: 0.15rem;
  font-size: 0.66rem;
  opacity: 0.65;
}

.footer {
  padding: 3rem 1.5rem 1.4rem;
  background: var(--black);
  color: rgba(255, 255, 255, 0.68);
}

.footer-grid {
  width: min(1100px, 100%);
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 1.6rem;
  margin: 0 auto 2rem;
}

.footer h4 {
  margin-bottom: 0.85rem;
  color: white;
  font-size: 0.82rem;
  text-transform: uppercase;
}

.footer p,
.footer a {
  font-size: 0.82rem;
  line-height: 1.7;
}

.footer ul {
  list-style: none;
}

.footer-bottom {
  width: min(1100px, 100%);
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin: 0 auto;
  padding-top: 1.4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.78rem;
}

.register-page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem;
  background:
    linear-gradient(135deg, rgba(37, 99, 235, 0.08), transparent 42%),
    var(--gray-100);
}

.register-container {
  width: min(960px, 100%);
  min-height: 580px;
  display: flex;
  overflow: hidden;
  border-radius: 22px;
  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.18);
}

.register-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2.5rem;
  background: linear-gradient(135deg, #0f2744, #1e40af);
  color: white;
}

.register-left h2 {
  font-size: 2rem;
  font-weight: 800;
}

.register-left p {
  margin-top: 0.5rem;
  opacity: 0.85;
}

.register-right {
  flex: 1;
  position: relative;
  padding: 2.5rem;
  background: white;
}

.register-back {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  padding: 0.42rem 0.8rem;
  border-radius: 8px;
  background: var(--gray-100);
  color: var(--gray-600);
  font-size: 0.8rem;
  font-weight: 700;
}

.register-right h2 {
  margin-top: 1rem;
  color: var(--gray-800);
  font-size: 1.7rem;
}

.subtitle {
  margin: 0.35rem 0 1.6rem;
  color: var(--gray-400);
  font-size: 0.9rem;
}

.form-group {
  position: relative;
  margin-bottom: 1rem;
}

.input-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  color: var(--blue-bright);
  font-weight: 800;
  transform: translateY(-50%);
}

.form-group input {
  width: 100%;
  min-height: 50px;
  padding: 0 1rem 0 2.75rem;
  border: 1.5px solid var(--gray-200);
  border-radius: 12px;
  outline: none;
  transition: border-color 180ms ease, box-shadow 180ms ease;
}

.form-group input:focus {
  border-color: var(--blue-bright);
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
}

.form-buttons .btn-primary,
.form-buttons .btn-secondary {
  flex: 1;
}

.form-message {
  display: none;
  margin-bottom: 1rem;
  padding: 0.8rem;
  border-radius: 10px;
  font-size: 0.86rem;
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
  margin-top: 1.6rem;
  color: var(--gray-400);
  font-size: 0.76rem;
  text-align: center;
}

.profile-page {
  background:
    radial-gradient(circle at 18% 18%, rgba(37, 99, 235, 0.08), transparent 24rem),
    radial-gradient(circle at 82% 30%, rgba(103, 232, 249, 0.12), transparent 22rem),
    var(--gray-50);
}

.profile-shell {
  width: min(1360px, calc(100% - 2rem));
  display: grid;
  grid-template-columns: 330px minmax(0, 1fr);
  gap: 1.5rem;
  margin: 0 auto;
  padding: 2.2rem 0 4rem;
}

.profile-sidebar {
  display: grid;
  gap: 1.4rem;
  align-content: start;
}

.profile-user-card,
.profile-side-group,
.profile-panel {
  border: 1px solid rgba(219, 227, 239, 0.85);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(12px);
}

.profile-user-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem;
}

.profile-avatar {
  width: 64px;
  height: 64px;
  border-radius: 12px;
  image-rendering: pixelated;
}

.profile-user-card h1 {
  color: var(--blue-dark);
  font-size: 1.1rem;
}

.profile-user-card span {
  display: inline-flex;
  margin-top: 0.45rem;
  padding: 0.35rem 0.7rem;
  border-radius: 8px;
  background: var(--gray-100);
  color: var(--gray-600);
  font-size: 0.78rem;
  font-weight: 900;
}

.profile-side-group {
  overflow: hidden;
  padding: 0.75rem 0;
}

.profile-side-group h2 {
  padding: 0.75rem 1rem;
  color: var(--blue-dark);
  font-size: 0.95rem;
}

.profile-side-link {
  width: 100%;
  min-height: 42px;
  display: flex;
  align-items: center;
  border: 0;
  padding: 0 1rem;
  background: transparent;
  color: var(--gray-600);
  font-weight: 800;
  text-align: left;
  cursor: pointer;
  transition: background 160ms ease, color 160ms ease;
}

.profile-side-link:hover,
.profile-side-link.active {
  background: var(--gray-100);
  color: var(--blue-bright);
}

.profile-main {
  display: grid;
  gap: 1.3rem;
  align-content: start;
}

.profile-panel {
  overflow: hidden;
}

.profile-detail-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
  padding: 1.2rem 1.4rem;
}

.profile-detail-grid p {
  padding: 0.55rem 0;
  color: var(--gray-500, var(--gray-600));
  line-height: 1.6;
}

.profile-detail-grid p:nth-child(odd) {
  padding-right: 1.2rem;
}

.profile-detail-grid p:nth-child(even) {
  border-left: 1px solid var(--gray-200);
  padding-left: 1.2rem;
}

.profile-detail-grid strong {
  color: var(--gray-600);
}

.profile-list {
  display: grid;
  gap: 0.75rem;
  padding: 1rem;
}

.profile-row,
.profile-empty {
  min-height: 54px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto auto;
  gap: 1rem;
  align-items: center;
  border-radius: 12px;
  padding: 0.85rem 1rem;
  background: var(--gray-50);
  color: var(--gray-800);
}

.profile-row {
  transition: background 160ms ease, transform 160ms ease;
}

.profile-row:hover {
  background: var(--blue-pale);
  transform: translateY(-1px);
}

.profile-row span,
.profile-row small,
.profile-empty span {
  color: var(--gray-600);
  font-weight: 700;
}

.profile-empty {
  grid-template-columns: 1fr;
  color: var(--red);
  text-align: center;
}

.breadcrumb,
.data-table-wrap {
  border-radius: 14px;
  background: white;
  box-shadow: var(--shadow);
}

.breadcrumb {
  margin-bottom: 1.4rem;
  padding: 0.9rem 1.1rem;
  color: var(--gray-400);
  font-size: 0.88rem;
}

.breadcrumb span {
  color: var(--gray-800);
  font-weight: 800;
}

.data-table-wrap {
  overflow: hidden;
}

.data-table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.2rem 1.4rem;
  border-bottom: 1px solid var(--gray-200);
}

.small-button {
  min-height: 38px;
  padding: 0 1rem;
  font-size: 0.8rem;
}

.empty-state {
  padding: 3rem 1rem;
  color: var(--red);
  text-align: center;
}

.support-panel {
  margin: 1.2rem;
  padding: 1.25rem;
  border: 1px solid rgba(37, 99, 235, 0.16);
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(219, 234, 254, 0.72), rgba(255, 255, 255, 0.94));
  animation: logo-rise 260ms ease both;
}

.support-panel h3,
.info-card h3 {
  color: var(--blue-dark);
  font-size: 1rem;
}

.support-panel p,
.info-card p,
.form-note {
  margin-top: 0.55rem;
  color: var(--gray-600);
  line-height: 1.7;
}

.support-panel .btn-secondary {
  margin-top: 1rem;
}

.punishment-grid {
  margin-bottom: 1.2rem;
}

.punishment-tab {
  border: 0;
  color: var(--gray-800);
  cursor: pointer;
}

.punishment-tab.active {
  border-color: rgba(37, 99, 235, 0.35);
  box-shadow: 0 22px 55px rgba(37, 99, 235, 0.18);
  transform: translateY(-3px);
}

.punishment-tab.active .icon {
  background: linear-gradient(135deg, var(--blue-bright), var(--blue-light));
  color: white;
}

.punishment-panel {
  margin-top: 1.2rem;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0 0.8rem;
  border-radius: 999px;
  background: var(--blue-pale);
  color: var(--blue-bright);
  font-size: 0.78rem;
  font-weight: 800;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  padding: 0.85rem 1.2rem;
  border-bottom: 1px solid var(--gray-200);
  text-align: left;
  font-size: 0.86rem;
}

.data-table th {
  color: var(--gray-400);
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
}

.application-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.65fr);
  gap: 1.2rem;
}

.application-form {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  padding: 1.2rem;
}

.app-field {
  display: grid;
  gap: 0.45rem;
  color: var(--gray-800);
  font-size: 0.88rem;
  font-weight: 800;
}

.app-field-wide,
.application-form .btn-primary,
.form-note {
  grid-column: 1 / -1;
}

.app-field input,
.app-field textarea,
.app-field select {
  width: 100%;
  border: 1.5px solid var(--gray-200);
  border-radius: 12px;
  outline: none;
  padding: 0.85rem 1rem;
  color: var(--gray-800);
  resize: vertical;
  transition: border-color 180ms ease, box-shadow 180ms ease;
}

.app-field input:focus,
.app-field textarea:focus,
.app-field select:focus {
  border-color: var(--blue-bright);
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
}

.form-note {
  min-height: 24px;
  margin-top: 0;
  font-size: 0.88rem;
  font-weight: 700;
}

.form-note.success {
  color: #166534;
}

.form-note.error {
  color: #991b1b;
}

.admin-section[hidden],
.admin-nav-button[hidden] {
  display: none;
}

.admin-table-scroll {
  overflow-x: auto;
}

.admin-page .data-table td {
  vertical-align: top;
}

.ticket-list {
  display: grid;
  gap: 0.8rem;
  padding: 1rem;
}

.ticket-card {
  display: grid;
  gap: 0.4rem;
  width: 100%;
  border: 1px solid rgba(37, 99, 235, 0.1);
  border-radius: 14px;
  background: white;
  color: var(--gray-800);
  padding: 1rem;
  text-align: left;
  cursor: pointer;
  box-shadow: 0 10px 26px rgba(15, 23, 42, 0.08);
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
}

.ticket-card:hover,
.ticket-card.active {
  border-color: rgba(37, 99, 235, 0.35);
  box-shadow: 0 18px 42px rgba(37, 99, 235, 0.14);
  transform: translateY(-2px);
}

.ticket-card strong {
  color: var(--blue-dark);
}

.ticket-card span,
.ticket-card small {
  color: var(--gray-600);
  line-height: 1.5;
}

.ticket-card b {
  color: var(--blue-dark);
}

.ticket-card .btn-primary,
.ticket-card .btn-secondary {
  justify-self: start;
  margin-top: 0.25rem;
}

.ticket-card.history-card,
.ticket-card.application-card {
  cursor: default;
}

.admin-history-block {
  margin-top: 1.2rem;
}

.history-list {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.compact-list {
  padding-top: 0;
}

.support-form {
  padding-left: 0;
  padding-right: 0;
}

.support-chat-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(300px, 0.85fr);
  gap: 1.2rem;
  align-items: start;
}

.admin-support-layout {
  grid-template-columns: minmax(280px, 0.8fr) minmax(0, 1.2fr);
}

.chat-panel {
  overflow: hidden;
}

.chat-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.2rem;
  border-bottom: 1px solid var(--gray-200);
}

.chat-header h2 {
  margin: 0.2rem 0 0.55rem;
}

.eyebrow-text {
  margin: 0;
  color: var(--blue-bright);
  font-size: 0.72rem;
  font-weight: 900;
  text-transform: uppercase;
}

.chat-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.55rem;
}

.danger-button {
  border-color: rgba(239, 68, 68, 0.25);
  background: #fee2e2;
  color: #991b1b;
}

.chat-messages {
  height: 430px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  overflow-y: auto;
  padding: 1.2rem;
  background:
    linear-gradient(180deg, rgba(219, 234, 254, 0.4), rgba(255, 255, 255, 0.3)),
    var(--gray-50);
}

.chat-bubble {
  max-width: min(78%, 520px);
  padding: 0.85rem 1rem;
  border: 1px solid rgba(37, 99, 235, 0.1);
  border-radius: 14px;
  background: white;
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.08);
}

.chat-bubble.mine {
  align-self: flex-end;
  background: var(--blue-bright);
  color: white;
}

.chat-bubble.theirs {
  align-self: flex-start;
}

.chat-bubble.system {
  align-self: center;
  max-width: 90%;
  background: var(--blue-pale);
  color: var(--blue-dark);
  text-align: center;
}

.chat-bubble strong,
.chat-bubble p,
.chat-bubble small {
  display: block;
  margin: 0;
  line-height: 1.5;
}

.chat-bubble p {
  margin-top: 0.25rem;
}

.chat-bubble small {
  margin-top: 0.35rem;
  color: inherit;
  opacity: 0.7;
  font-size: 0.75rem;
}

.chat-composer {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 0.75rem;
  padding: 1rem 1.2rem;
  border-top: 1px solid var(--gray-200);
  background: white;
}

.chat-composer input:disabled,
.chat-composer button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.pause-panel {
  border-top: 1px solid var(--gray-200);
  background: var(--gray-50);
}

.support-history-card {
  width: 100%;
  border: 0;
  text-align: left;
  cursor: pointer;
}

.info-stack {
  display: grid;
  gap: 1rem;
  align-content: start;
}

.info-card {
  padding: 1.2rem;
  border: 1px solid rgba(37, 99, 235, 0.1);
  border-radius: 14px;
  background: white;
  box-shadow: var(--shadow);
}

@keyframes logo-rise {
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 860px) {
  .top-nav {
    justify-content: flex-start;
    overflow-x: auto;
  }

  .wave-bar,
  .recent-bar,
  .register-container {
    flex-direction: column;
  }

  .cards-grid,
  .footer-grid,
  .application-layout,
  .application-form,
  .support-chat-layout,
  .admin-support-layout,
  .profile-shell,
  .profile-detail-grid {
    grid-template-columns: 1fr;
  }

  .profile-shell {
    width: min(100% - 1rem, 760px);
    padding-top: 1rem;
  }

  .profile-detail-grid p:nth-child(even) {
    border-left: 0;
    padding-left: 0;
  }

  .profile-row {
    grid-template-columns: 1fr;
    gap: 0.35rem;
  }

  .profile-menu-root.profile-menu-nav {
    margin-left: auto;
  }

  .profile-popover {
    right: 0;
    width: min(272px, calc(100vw - 1.5rem));
  }

  .chat-header {
    display: grid;
  }

  .chat-actions {
    justify-content: flex-start;
  }

  .chat-messages {
    height: 360px;
  }

  .chat-bubble {
    max-width: 92%;
  }

  .chat-composer {
    grid-template-columns: 1fr;
  }

  .recent-bar-left {
    flex: none;
  }

  .register-left {
    min-height: 210px;
  }
}
