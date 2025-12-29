# Crypto Dash 🚀

**Crypto Dash** is a beginner-friendly React + Vite app that shows live cryptocurrency data using the CoinGecko API. It demonstrates basic React concepts like fetching data, routing, component composition, and displaying charts with Chart.js.

---

## ✅ Features

- View a list of top cryptocurrencies with image, price, 24h change, and market cap
- Filter coins by name or symbol
- Change how many coins to show with a **Show** selector (5, 10, 30, 50, 100)
- Sort coins by market cap, price, or 24h change
- Click a coin to open a **Details** page with more info and a 7-day price chart (Chart.js)
- Loading indicators and friendly error messages

---

## 🧰 Tech Stack

- React (v19)
- Vite (dev server & build)
- Chart.js + react-chartjs-2 (charts)
- CoinGecko public API (no API key required)
- date-fns (for date handling)

---

## 🚀 Getting Started (Beginner-friendly)

### Prerequisites

- Node.js (>= 16) and npm installed. Check with:

```bash
node -v
npm -v
```

### Install

1. Clone the repo (or download the files):

```bash
git clone <repo-url>
cd Crypto_Dash
```

2. Install dependencies:

```bash
npm install
```

3. Create an `.env` file in the project root and add the API URLs used by the app. Example `.env`:

```ini
VITE_API_URL=https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd
VITE_COIN_API_URL=https://api.coingecko.com/api/v3/coins
```

> Note: The app expects these variables because it builds the fetch URLs from them. CoinGecko is public and does not require an API key, but respect their rate limits.

### Run the app (development)

```bash
npm run dev
```

Open your browser at the Vite server url (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

---

## 📁 Project structure (important files)

- `index.html` - HTML template
- `src/main.jsx` - React entry
- `src/App.jsx` - Routing, top-level state and data fetching
- `src/pages/HomePage.jsx` - Main page: filter, sort, list of coins
- `src/pages/CoinDetailsPage.jsx` - Coin details + price chart
- `src/components/CardCoin.jsx` - Card used on the home grid
- `src/components/CardChartjs.jsx` - Chart component (7-day price chart)
- `src/components/FilterInput.jsx`, `LimitSelector.jsx`, `SortBy.jsx` - Small UI controls
- `src/components/Spinner.jsx` - Loading indicator

---

## 💡 Quick Usage Tips

- Use the filter box to find a coin by name or symbol (e.g., `bitcoin` or `btc`).
- Change the **Show** selector to load more or fewer coins.
- Click a coin card to view details and the interactive price chart.

---

## 🐛 Troubleshooting (common beginner issues)

- No data shown? Make sure you added `.env` with `VITE_API_URL` and `VITE_COIN_API_URL` and restarted the dev server.
- Network or CORS errors may be caused by internet issues or temporary API outages.
- If you see ESLint errors, run `npm run lint` to view them and fix according to messages.

---

## 🤝 Contributing

Feel free to open issues or PRs. You can add features like dark mode, more chart options, or unit tests.

---

## 📄 License

This project does not include a license file. Add an open-source license if you plan to share it publicly.

---

If you'd like, I can also add a short demo GIF or a screenshot, or expand the README with development notes or contribution guidelines. ✨
