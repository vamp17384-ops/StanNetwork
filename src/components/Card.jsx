import styles from './Card.module.css'

export default function Card({ title, subtitle, tag, meta, href = '#', badge }) {
  return (
    <a href={href} className={styles.card} target="_blank" rel="noopener noreferrer">
      {badge && <span className={styles.badge}>{badge}</span>}
      <div className={styles.inner}>
        {tag && <span className={styles.tag}>{tag}</span>}
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {meta && <span className={styles.meta}>{meta}</span>}
      </div>
      <span className={styles.arrow}>→</span>
    </a>
  )
}
