import Image from 'next/image'
import styles from './page.module.css'

const phases = [
  { phase: 'Before', title: 'Know who’s ready', body: 'See household status across your trusted circle before conditions change.' },
  { phase: 'During', title: 'Stay connected', body: 'Share real-time status and coordinate practical help while it’s happening.' },
  { phase: 'After', title: 'Check in and recover', body: 'Confirm everyone’s safe and organize support once the immediate danger passes.' },
]

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Image src="/assets/lhl-wordmark.svg" alt="Lee Hill Labs" width={155} height={22} priority />
        <Image className={styles.symbol} src="/assets/lhl-symbol.svg" alt="" width={36} height={31} priority />
      </header>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Trusted Community Coordination</p>
        <h1>The coordination layer communities need.</h1>
        <p className={styles.intro}>
          Lee Hill Labs is building tools for neighbors who already trust each other to handle wildfires, floods, and other disruptive events together. Share household status, organize practical help, and stay connected before, during, and after an event. Official safety guidance still comes from emergency authorities.
        </p>
        <a className={styles.cta} href="mailto:john@leehilllabs.com">Get in touch</a>
      </section>

      <section className={styles.phases} aria-label="Community coordination phases">
        {phases.map(({ phase, title, body }) => (
          <article className={styles.card} key={phase}>
            <p className={styles.phase}>{phase}</p>
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>

      <footer className={styles.footer}>
        <nav aria-label="Footer navigation">
          <a href="mailto:john@leehilllabs.com">Contact Us</a>
          <a href="https://www.linkedin.com/company/lee-hill-labs" target="_blank" rel="noreferrer">LinkedIn</a>
        </nav>
        <p>© 2026 Lee Hill Labs, Inc.</p>
      </footer>
    </main>
  )
}
