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
  --red: #ef4444;
  --green: #22c55e;
  --shadow: 0 18px 45px rgba(15, 23, 42, 0.12);
}

* {
  box-sizing: border-box;
}

html {
  min-height: 100%;
}

body {
  min-height: 100vh;
  margin: 0;
  overflow-x: hidden;
  background:
    linear-gradient(180deg, white, transparent 18rem),
    linear-gradient(135deg, rgba(37, 99, 235, 0.08), transparent 42%),
    var(--gray-50);
  color: var(--gray-800);
  font-family: Inter, Arial, sans-serif;
  letter-spacing: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input {
  font: inherit;
}

.market-nav {
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

.market-nav a {
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

.market-nav a:hover,
.market-nav a.active {
  background: rgba(255, 255, 255, 0.1);
  color: var(--white);
  transform: translateY(-1px);
}

.market-nav .nav-btn,
.market-nav .nav-register {
  background: var(--blue-bright);
  color: var(--white);
}

.market-nav .nav-login {
  background: var(--blue-pale);
  color: var(--blue-bright);
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

.avatar {
  border-radius: 6px;
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

.page-shell {
  width: min(1100px, 100%);
  min-height: calc(100vh - 58px);
  display: grid;
  align-items: center;
  margin: 0 auto;
  padding: 2.4rem 1rem 3rem;
}

.page-shell.compact {
  width: min(760px, 100%);
}

.checkout-panel,
.result-card {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(37, 99, 235, 0.08);
  border-radius: 20px;
  background: white;
  box-shadow: var(--shadow);
}

.checkout-panel {
  padding: 1.5rem;
}

.back-link,
.primary-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0 0.95rem;
  border-radius: 999px;
  background: var(--blue-pale);
  color: var(--blue-bright);
  font-size: 0.84rem;
  font-weight: 800;
  transition: transform 180ms ease, background 180ms ease;
}

.back-link:hover,
.primary-link:hover {
  background: #bfdbfe;
  transform: translateY(-2px);
}

.hero-strip {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.4rem;
  margin-top: 1.2rem;
  padding: 2rem;
  border-radius: 18px;
  background:
    linear-gradient(120deg, rgba(59, 130, 246, 0.2), transparent 44%),
    linear-gradient(135deg, #0f2744 0%, #1e40af 52%, #2563eb 100%);
  color: white;
}

.eyebrow {
  margin: 0 0 0.65rem;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 5vw, 3.8rem);
  line-height: 1;
}

.lede {
  max-width: 680px;
  margin: 1rem 0 0;
  color: rgba(255, 255, 255, 0.82);
  font-size: 1rem;
  line-height: 1.7;
}

.trust-badge {
  flex: 0 0 auto;
  min-width: 132px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.1);
  text-align: center;
}

.trust-badge span {
  display: block;
  font-size: 1.9rem;
  font-weight: 800;
}

.trust-badge small {
  display: block;
  margin-top: 0.25rem;
  color: rgba(255, 255, 255, 0.78);
  font-weight: 700;
}

.package-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin: 1.25rem 0;
}

.market-section {
  margin-top: 1.35rem;
}

.market-section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;
  margin: 0.15rem 0 0.9rem;
}

.market-section-heading h2 {
  margin: 0;
  color: var(--blue-dark);
  font-size: 1.2rem;
  line-height: 1.2;
}

.eyebrow.dark {
  margin: 0 0 0.25rem;
  color: var(--blue-bright);
}

.membership-grid {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.crate-section {
  padding-top: 0.25rem;
}

.crate-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.package-card {
  position: relative;
  min-height: 196px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.7rem;
  overflow: hidden;
  padding: 1.25rem;
  border: 1px solid rgba(37, 99, 235, 0.08);
  border-radius: 16px;
  background: white;
  color: var(--gray-800);
  text-align: left;
  box-shadow: var(--shadow);
  cursor: pointer;
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
}

.package-card::before {
  position: absolute;
  inset: 0 auto 0 0;
  width: 4px;
  content: "";
  background: var(--blue-bright);
  transform: scaleY(0);
  transition: transform 180ms ease;
}

.package-card:hover,
.package-card.active {
  border-color: rgba(37, 99, 235, 0.35);
  box-shadow: 0 22px 55px rgba(37, 99, 235, 0.16);
  transform: translateY(-4px);
}

.package-card.active::before,
.package-card:hover::before {
  transform: scaleY(1);
}

.package-card.active {
  background: linear-gradient(135deg, rgba(219, 234, 254, 0.78), white);
}

.sponsor-card::before {
  background: #0f766e;
}

.sponsor-card.active {
  background: linear-gradient(135deg, rgba(204, 251, 241, 0.78), white);
}

.crate-card::before {
  background: #7c3aed;
}

.crate-card.active {
  background: linear-gradient(135deg, rgba(237, 233, 254, 0.82), white);
}

.package-topline,
.package-copy {
  color: var(--gray-600);
  line-height: 1.55;
}

.package-topline {
  font-size: 0.84rem;
  font-weight: 800;
}

.package-name {
  font-size: 1.85rem;
  font-weight: 800;
}

.price {
  margin-top: auto;
  color: var(--blue-bright);
  font-size: 1.85rem;
  font-weight: 800;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.form-grid.single-field {
  grid-template-columns: minmax(0, 1fr);
}

.credit-checkout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) auto;
  gap: 1rem;
  align-items: end;
  margin-top: 1.3rem;
  padding: 1rem;
  border: 1px solid rgba(37, 99, 235, 0.1);
  border-radius: 16px;
  background: var(--gray-50);
}

.credit-total {
  min-width: 170px;
  display: grid;
  gap: 0.35rem;
  padding: 0.9rem 1rem;
  border-radius: 12px;
  background: white;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
}

.credit-total span {
  color: var(--gray-600);
  font-size: 0.82rem;
  font-weight: 800;
}

.credit-total strong {
  color: var(--blue-bright);
  font-size: 1.35rem;
}

.floating-cart {
  position: fixed;
  right: 1.4rem;
  bottom: 1.4rem;
  z-index: 90;
  width: min(320px, calc(100vw - 2rem));
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid rgba(219, 227, 239, 0.9);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.94);
  color: var(--gray-800);
  box-shadow: 0 24px 65px rgba(15, 23, 42, 0.2);
  backdrop-filter: blur(18px);
  animation: cart-rise 280ms cubic-bezier(0.2, 0.9, 0.2, 1) both;
}

.floating-cart span,
.floating-cart small {
  display: block;
  color: var(--gray-600);
  font-size: 0.78rem;
  font-weight: 800;
}

.floating-cart strong {
  display: block;
  margin: 0.15rem 0;
  color: var(--blue-dark);
  font-size: 1.1rem;
}

.cart-pay-button {
  min-height: 42px;
  flex: 0 0 auto;
  border: 0;
  border-radius: 12px;
  padding: 0 1rem;
  background: var(--blue-bright);
  color: white;
  font-weight: 900;
  cursor: pointer;
  box-shadow: 0 14px 28px rgba(37, 99, 235, 0.22);
  transition: transform 180ms ease, background 180ms ease;
}

.cart-pay-button:hover {
  background: var(--blue-light);
  transform: translateY(-2px);
}

.field {
  display: grid;
  gap: 0.5rem;
  color: var(--gray-800);
  font-size: 0.88rem;
  font-weight: 800;
}

input {
  width: 100%;
  min-height: 50px;
  border: 1.5px solid var(--gray-200);
  border-radius: 12px;
  outline: none;
  padding: 0 1rem;
  background: white;
  color: var(--gray-800);
  transition: border-color 180ms ease, box-shadow 180ms ease;
}

input::placeholder {
  color: var(--gray-400);
}

input:focus {
  border-color: var(--blue-bright);
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
}

.pay-button {
  width: 100%;
  min-height: 54px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  margin-top: 1.2rem;
  border: 0;
  border-radius: 12px;
  background: var(--blue-bright);
  color: white;
  font-weight: 800;
  box-shadow: 0 16px 30px rgba(37, 99, 235, 0.22);
  cursor: pointer;
  transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
}

.pay-button:hover {
  background: var(--blue-light);
  box-shadow: 0 22px 45px rgba(37, 99, 235, 0.28);
  transform: translateY(-2px);
}

.button-arrow {
  transition: transform 180ms ease;
}

.pay-button:hover .button-arrow {
  transform: translateX(4px);
}

.status-message {
  display: none;
  align-items: center;
  min-height: 48px;
  margin-top: 1rem;
  padding: 0.85rem 1rem;
  border: 1px solid var(--gray-200);
  border-radius: 12px;
  background: white;
  line-height: 1.5;
}

.status-message.visible {
  display: flex;
}

.status-message.loading::before {
  width: 16px;
  height: 16px;
  margin-right: 0.65rem;
  content: "";
  border: 2px solid var(--gray-200);
  border-top-color: var(--blue-bright);
  border-radius: 999px;
  animation: spin 800ms linear infinite;
}

.muted {
  color: var(--gray-600);
}

.ok {
  display: flex;
  border-color: rgba(34, 197, 94, 0.24);
  background: #dcfce7;
  color: #166534;
}

.err {
  display: flex;
  border-color: rgba(239, 68, 68, 0.24);
  background: #fee2e2;
  color: #991b1b;
}

.iframe-box {
  display: none;
  overflow: hidden;
  margin-top: 1rem;
  border: 1px solid var(--gray-200);
  border-radius: 14px;
  background: white;
  animation: lift-in 320ms ease both;
}

#paytriframe {
  width: 100%;
  min-height: 650px;
}

.result-card {
  padding: 2.4rem;
  text-align: center;
}

.result-icon {
  width: 74px;
  height: 74px;
  display: grid;
  place-items: center;
  margin: 0 auto 1.4rem;
  border-radius: 50%;
  font-size: 2.4rem;
  font-weight: 800;
}

.success .result-icon {
  background: #dcfce7;
  color: #166534;
}

.failed .result-icon {
  background: #fee2e2;
  color: #991b1b;
}

.result-card .primary-link {
  margin-top: 1.3rem;
}

.delivery-form {
  display: grid;
  gap: 1rem;
  margin-top: 1.1rem;
  text-align: left;
}

.delivery-form .pay-button {
  margin-top: 0;
}

.delivery-summary {
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid var(--gray-200);
  border-radius: 12px;
  background: var(--gray-50);
  color: var(--gray-600);
  line-height: 1.8;
  text-align: left;
  word-break: break-word;
}

.page-enter {
  animation: lift-in 420ms ease both;
}

@keyframes lift-in {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes cart-rise {
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

@media (max-width: 760px) {
  .market-nav {
    justify-content: flex-start;
    overflow-x: auto;
  }

  .profile-menu-root.profile-menu-nav {
    margin-left: auto;
  }

  .profile-popover {
    width: min(272px, calc(100vw - 1.5rem));
  }

  .page-shell {
    align-items: start;
    padding: 1rem 0.75rem 2rem;
  }

  .checkout-panel,
  .result-card {
    border-radius: 16px;
  }

  .checkout-panel {
    padding: 1rem;
  }

  .hero-strip {
    display: grid;
    padding: 1.35rem;
  }

  .package-grid,
  .membership-grid,
  .crate-grid,
  .form-grid,
  .credit-checkout {
    grid-template-columns: 1fr;
  }

  .credit-total {
    min-width: 0;
  }

  .floating-cart {
    right: 0.75rem;
    bottom: 0.75rem;
  }

  .trust-badge {
    width: 100%;
  }
}

@media (min-width: 761px) and (max-width: 1040px) {
  .package-grid,
  .membership-grid,
  .crate-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1041px) and (max-width: 1180px) {
  .membership-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
