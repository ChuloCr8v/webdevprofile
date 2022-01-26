import styles from '../styles/Hero.module.scss'
import Link from 'next/link'

const Hero = () => {
  return (
      <section className={styles.hero}>
        <h1>Need A Website?</h1>
        <p>Give your business and brand a wider reach with a unique website tailored for your target audience</p>
        <div className={styles.btn_container}>
          <Link className={styles.contact_link} href="#"> Contact Us </Link>
          <Link className={styles.quote_link} href="#"> Get A Quote </Link>
        </div>
      </section>
    )
}

export default Hero