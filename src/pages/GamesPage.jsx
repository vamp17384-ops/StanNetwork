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
    title: 'Slope',
    subtitle: 'Race a ball down an endless slope while avoiding obstacles.',
    tag: 'Arcade',
    meta: 'Browser · No install',
    href: 'https://slope-game.github.io',
    badge: 'HOT',
  },
  {
    title: 'Run 3',
    subtitle: 'Run through an infinite tunnel in outer space, jumping gaps.',
    tag: 'Endless Runner',
    meta: 'Flash-free · HTML5',
    href: '#',
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
    title: 'Minecraft Classic',
    subtitle: 'The original Minecraft, playable directly in your browser.',
    tag: 'Sandbox',
    meta: 'Classic · Free',
    href: 'https://classic.minecraft.net',
  },
  {
    title: 'Cookie Clicker',
    subtitle: 'The iconic idle game. Click cookies, build an empire.',
    tag: 'Idle',
    meta: 'No download required',
    href: 'https://orteil.dashnet.org/cookieclicker/',
  },
  {
    title: 'Among Us Online',
    subtitle: 'Find the impostor — the browser version.',
    tag: 'Social',
    meta: 'HTML5 · Multiplayer',
    href: '#',
    badge: 'NEW',
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
