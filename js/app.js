const toast = (message) => {
  const el = document.querySelector('.toast');
  if (!el) return;
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => el.classList.remove('show'), 3000);
};

const amountInput = document.querySelector('#amount');
const receiveOutput = document.querySelector('#receive');
if (amountInput && receiveOutput) {
  amountInput.addEventListener('input', () => {
    const amount = Number(amountInput.value);
    receiveOutput.textContent = amount > 0 ? `${(amount * 0.98 / 72.5).toFixed(2)} USDT` : '-- USDT';
  });
}
const buyForm = document.querySelector('#buy-form');
if (buyForm) buyForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const amount = Number(amountInput.value);
  if (!Number.isFinite(amount) || amount < 1000 || amount > 500000) {
    toast('Please enter an amount between 1,000 and 500,000 AFN.');
    return;
  }
  toast('Demo only: connect the official HesabPay payment API to accept payments.');
});

const navToggle = document.querySelector('.site-header .menu-toggle');
const topNav = document.querySelector('.top-nav');
if (navToggle && topNav) navToggle.addEventListener('click', () => {
  const opened = topNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(opened));
});

const sidebar = document.querySelector('#sidebar');
const dashboardToggle = document.querySelector('.dashboard-menu');
if (sidebar && dashboardToggle) {
  dashboardToggle.addEventListener('click', () => {
    const opened = sidebar.classList.toggle('open');
    dashboardToggle.setAttribute('aria-expanded', String(opened));
  });
  sidebar.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    sidebar.classList.remove('open');
    dashboardToggle.setAttribute('aria-expanded', 'false');
  }));
  document.addEventListener('click', event => {
    if (window.innerWidth <= 720 && sidebar.classList.contains('open') &&
      !sidebar.contains(event.target) && !dashboardToggle.contains(event.target)) {
      sidebar.classList.remove('open');
      dashboardToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js')
    .catch(err => console.error('Service worker registration failed:', err)));
}
