# NEXUS — Proxy · Games · Movies

A modern black & white multi-tab website built with React + Vite.  
Deployable on **Vercel**, hosted on **GitHub**, with **Google AdSense** slots ready to activate.

---

## 🚀 Deploy in 5 Minutes

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "init: nexus site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub repo
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click **Deploy** ✅

Vercel auto-deploys on every `git push` to `main`.

---

## 📁 Project Structure

```
site/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── AdUnit.jsx          ← Google AdSense component
│   │   ├── AdUnit.module.css
│   │   ├── Card.jsx            ← Reusable card for all tabs
│   │   ├── Card.module.css
│   │   ├── Navbar.jsx          ← Tab navigation bar
│   │   └── Navbar.module.css
│   ├── pages/
│   │   ├── ProxyPage.jsx       ← Proxy tab content
│   │   ├── GamesPage.jsx       ← Games tab content
│   │   ├── MoviesPage.jsx      ← Movies tab content
│   │   └── Page.module.css     ← Shared page styles
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx                 ← Tab switching logic
│   └── main.jsx
├── index.html                  ← AdSense script tag lives here
├── vercel.json
└── package.json
```

---

## ➕ Adding Items to a Tab

Each page has a simple array at the top. Just add an object:

```js
// In src/pages/GamesPage.jsx
const GAMES = [
  {
    title: 'My New Game',           // required
    subtitle: 'Short description',  // optional
    tag: 'Category',                // optional — shown in small caps
    meta: 'Extra info',             // optional — shown dim below
    href: 'https://example.com',    // required — where the card links
    badge: 'NEW',                   // optional — corner badge label
  },
  // ... existing items
]
```

Same pattern works for `PROXIES` in `ProxyPage.jsx` and `MOVIES` in `MoviesPage.jsx`.

---

## ➕ Adding a New Tab

1. Create `src/pages/YourPage.jsx` (copy any existing page as a template)
2. Add the tab to `src/components/Navbar.jsx`:
```js
const TABS = [
  { id: 'proxy',  label: 'Proxy',  icon: '⬡' },
  { id: 'games',  label: 'Games',  icon: '◈' },
  { id: 'movies', label: 'Movies', icon: '◉' },
  { id: 'your',   label: 'Your',   icon: '◆' }, // ← add this
]
```
3. Register it in `src/App.jsx`:
```js
import YourPage from './pages/YourPage'

const TABS = {
  proxy:  <ProxyPage />,
  games:  <GamesPage />,
  movies: <MoviesPage />,
  your:   <YourPage />,   // ← add this
}
```

---

## 💰 Google AdSense Setup

### Step 1 — Enable the script tag in `index.html`

Uncomment this block and replace the Publisher ID:

```html
<script async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
  crossorigin="anonymous">
</script>
```

### Step 2 — Place ad units in any page

Each page file has commented-out `<AdUnit />` lines. Uncomment them and add your slot ID:

```jsx
// In src/pages/GamesPage.jsx (or any other page)
<AdUnit adSlot="1234567890" format="horizontal" />
```

### Step 3 — AdUnit props reference

| Prop | Default | Description |
|------|---------|-------------|
| `adSlot` | `'XXXXXXXXXX'` | Your Ad Unit slot ID from AdSense dashboard |
| `adClient` | `'ca-pub-XXXXXXXXXX'` | Your Publisher ID |
| `format` | `'auto'` | `auto`, `horizontal`, `vertical`, `rectangle` |
| `fullWidthResponsive` | `true` | Expands to full width on mobile |

### Where to place ads for best results

```
┌─────────────────────────────────┐
│         HERO SECTION            │
├─────────────────────────────────┤
│  <AdUnit format="horizontal" /> │  ← top banner (before grid)
├─────────────────────────────────┤
│  Card  │  Card  │  Card         │
│  Card  │  Card  │  Card         │
├─────────────────────────────────┤
│  <AdUnit format="horizontal" /> │  ← bottom banner (after grid)
└─────────────────────────────────┘
```

---

## 🎨 Customization

### Change the site name
Edit `<title>` in `index.html` and the `.logoText` in `Navbar.jsx`.

### Change colors
All colors are CSS variables in `src/styles/global.css` under `:root {}`.

### Change fonts
Replace the Google Fonts `<link>` in `index.html` and update `--font-display`, `--font-mono`, `--font-body` in `global.css`.

---

## 🛠 Local Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build locally
```

---

## 📄 License

MIT — do whatever you want with it.
