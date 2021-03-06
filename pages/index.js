import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Why from "../components/Why";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import FavIcon from '../public/images/favicon.png'
export default function Home() {
  
  const showHeading = true
  return (
    <div className={styles.container}>
      <Head>
        <title>Clever Developers</title>
        <meta
          name="Clever Developers"
          content="Your best contact for all Website Developments | Wordpress Development | Ecommerce Store Development | SEO | Branding Experts etc. "
        />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <main>
        <Hero />
        <About showHeading={showHeading} />
        <Services />
        <Why />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
