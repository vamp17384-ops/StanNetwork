import Card from '../components/Card'
import AdUnit from '../components/AdUnit'
import styles from './Page.module.css'

/**
 * ════════════════════════════════════════
 * PROXY PAGE — Add/edit proxies here
 * Each item in the PROXIES array becomes a card.
 * Fields: title, subtitle, tag, meta, href, badge
 * ════════════════════════════════════════
 */
const PROXIES = [
  {
    title: 'Ultraviolet',
    subtitle: 'A highly advanced web proxy service with full browser compatibility.',
    tag: 'Web Proxy',
    meta: 'TompHTTP · Open Source',
    href: 'https://github.com/titaniumnetwork-dev/Ultraviolet',
    badge: 'POPULAR',
  },
  {
    title: 'Holy Unblocker',
    subtitle: 'A web proxy service that bypasses internet restrictions and filters.',
    tag: 'Bypass',
    meta: 'Stable · Actively maintained',
    href: 'https://holyunblocker.org',
  },
  {
    title: 'Corrosion',
    subtitle: 'Node.js-based proxy optimized for speed and low latency.',
    tag: 'Node Proxy',
    meta: 'Open Source',
    href: 'https://github.com/titaniumnetwork-dev/Corrosion',
  },
  {
    title: 'Incognito',
    subtitle: 'A sleek unblocker built on Ultraviolet with a clean UI.',
    tag: 'Frontend',
    meta: 'Self-hostable',
    href: 'https://github.com/titaniumnetwork-dev/incognito',
    badge: 'NEW',
  },
]

export default function ProxyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <span className={styles.heroLabel}>// PROXY</span>
        <h1 className={styles.heroTitle}>Browse<br />Unblocked.</h1>
        <p className={styles.heroSub}>
          Dont let them block you.
        </p>
      </div>

      {/* ── AdSense — Top Banner ── */}
      {/* <AdUnit adSlot="YOUR_SLOT_ID" format="horizontal" /> */}

      <div className={styles.grid}>
        {PROXIES.map((proxy) => (
          <Card key={proxy.title} {...proxy} />
        ))}
      </div>

      {/* ── AdSense — Bottom Banner ── */}
      {/* <AdUnit adSlot="YOUR_SLOT_ID" format="horizontal" /> */}
    </div>
  )
}
