AJ USDT - Responsive PWA front-end

Pages:
- index.html: public landing / Buy USDT page
- dashboard.html: desktop dashboard + mobile dashboard matching the supplied mobile reference

Tech:
- HTML5, CSS3, Vanilla JavaScript
- Inline SVG icon set (no icon package or build step required)
- Responsive desktop/tablet/mobile layouts
- PWA manifest and service worker cache

Run:
1. Extract ZIP and open folder in VS Code.
2. Start with Live Server (or another local HTTP server).
3. Open index.html. Dashboard link leads to dashboard.html.
4. For install/offline testing, use localhost or HTTPS; file:// does not support service workers.

Notes:
- Balance, orders, user details and exchange rate are sample UI data.
- The Buy form is a front-end demo. Real payments require a secure backend and official HesabPay API integration.
- Google Fonts are optional online fonts; Inter/Arial fallback remains available.
