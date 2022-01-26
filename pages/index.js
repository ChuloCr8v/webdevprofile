import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Services from '../components/Services'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clever Developers</title>
        <meta name="Clever Developers" content="Your best contact for all Website Developments | Wordpress Development | Ecommerce Store Development | SEO | Branding Experts etc. " />
        {/*<link rel="icon" href="/logo.png" />*/}
      </Head>
      <main>
        <Hero />
        <Services />
      </main>
    </div>
  )
}