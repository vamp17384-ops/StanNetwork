import styles from './Navbar.module.css'

const TABS = [
  { id: 'proxy',  label: 'Proxy',  icon: '⬡' },
  { id: 'games',  label: 'Games',  icon: '◈' },
  { id: 'movies', label: 'Movies', icon: '◉' },
]

export default function Navbar({ activeTab, onTabChange }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoMark}>Stan</span>
        <span className={styles.logoText}>Network</span>
      </div>

      <nav className={styles.nav} role="navigation" aria-label="Main tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => onTabChange(tab.id)}
            aria-current={activeTab === tab.id ? 'page' : undefined}
          >
            <span className={styles.tabIcon}>{tab.icon}</span>
            <span className={styles.tabLabel}>{tab.label}</span>
            {activeTab === tab.id && <span className={styles.activeBar} />}
          </button>
        ))}
      </nav>

      <div className={styles.slot} aria-hidden="true">
        <span className={styles.statusDot} />
        <span className={styles.statusText}>LIVE</span>
      </div>
    </header>
  )
}
