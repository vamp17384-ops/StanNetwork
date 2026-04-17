import Card from '../components/Card'
import AdUnit from '../components/AdUnit'
import styles from './Page.module.css'

/**
 * ════════════════════════════════════════
 * GAMES PAGE — Add/edit games here
 * Each item in the GAMES array becomes a card.
 * Fields: title, subtitle, tag, meta, href, badge
 * ════════════════════════════════════════
 */
const GAMES = [
  {
    title: 'Under Construction',
    subtitle: 'Coming soon',
    tag: '',
    meta: '',
    href: '',
  },
  { 
    title: 'Under Construction',
    subtitle: 'Coming soon',
    tag: '',
    meta: '',
    href: '',
  },
  {
    title: '1v1.LOL',
    subtitle: 'Build, battle, and outplay opponents in real-time combat.',
    tag: 'Battle',
    meta: 'Multiplayer · Online',
    href: 'https://1v1.lol',
    badge: 'POPULAR',
  },
  {
    title: 'Under Construction',
    subtitle: 'Coming soon',
    tag: '',
    meta: '',
    href: '',
  },
  {
    title: 'Under Construction',
    subtitle: 'Coming soon',
    tag: '',
    meta: '',
    href: '',
  },
  {
    title: 'Under Construction',
    subtitle: 'Coming soon',
    tag: '',
    meta: '',
    href: '',
  },
]

export default function GamesPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <span className={styles.heroLabel}>// GAMES</span>
        <h1 className={styles.heroTitle}>Play<br />Anything.</h1>
        <p className={styles.heroSub}>
          Unblocked browser games. No downloads, no logins, no limits.
        </p>
      </div>

      {/* ── AdSense — Top Banner ── */}
      {/* <AdUnit adSlot="YOUR_SLOT_ID" format="horizontal" /> */}

      <div className={styles.grid}>
        {GAMES.map((game) => (
          <Card key={game.title} {...game} />
        ))}
      </div>

      {/* ── AdSense — Bottom Banner ── */}
      {/* <AdUnit adSlot="YOUR_SLOT_ID" format="horizontal" /> */}
    </div>
  )
}
