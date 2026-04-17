import Card from '../components/Card'
import AdUnit from '../components/AdUnit'
import styles from './Page.module.css'

/**
 * ════════════════════════════════════════
 * MOVIES PAGE — Add/edit movie links here
 * Each item in the MOVIES array becomes a card.
 * Fields: title, subtitle, tag, meta, href, badge
 * ════════════════════════════════════════
 */
const MOVIES = [
  {
    title: 'New Out',
    subtitle: 'New movies that came out!',
    tag: 'mp4',
    meta: 'Free · Mobile Support',
    href: 'https://drive.google.com/drive/folders/1QYKR43auTUUrDLsxAA06IGNMlG4gMVjY?usp=sharing',
    badge: 'BEST',
  },
  {
    title: 'Under Construction',
    subtitle: 'Coming soon',
    tag: '',
    meta: '',
    href: '',
  },
  {
    title: 'Pluto TV',
    subtitle: 'Free live TV and on-demand movies — no subscriptions.',
    tag: 'Live TV',
    meta: 'Free · 250+ channels',
    href: 'https://pluto.tv',
  },
  {
    title: 'Crackle',
    subtitle: 'Sony-backed free streaming with original content and classic films.',
    tag: 'Free',
    meta: 'Originals · Classic',
    href: 'https://www.crackle.com',
    badge: 'NEW',
  },
  {
    title: 'Internet Archive',
    subtitle: 'Public domain films, vintage movies, and historical footage.',
    tag: 'Archive',
    meta: 'Public Domain · Free',
    href: 'https://archive.org/details/movies',
  },
  {
    title: 'Plex',
    subtitle: 'Stream free movies and TV shows with a free Plex account.',
    tag: 'Streaming',
    meta: 'Free tier available',
    href: 'https://watch.plex.tv',
    badge: 'POPULAR',
  },
]

export default function MoviesPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <span className={styles.heroLabel}>// MOVIES</span>
        <h1 className={styles.heroTitle}>Watch<br />Everything.</h1>
        <p className={styles.heroSub}>
          Pick from our finest selection of totaly legal movies.
        </p>
      </div>

      {/* ── AdSense — Top Banner ── */}
      {/* <AdUnit adSlot="YOUR_SLOT_ID" format="horizontal" /> */}

      <div className={styles.grid}>
        {MOVIES.map((movie) => (
          <Card key={movie.title} {...movie} />
        ))}
      </div>

      {/* ── AdSense — Bottom Banner ── */}
      {/* <AdUnit adSlot="YOUR_SLOT_ID" format="horizontal" /> */}
    </div>
  )
}
