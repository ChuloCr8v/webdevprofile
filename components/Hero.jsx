import styles from "../styles/Hero.module.scss";
import Link from "next/link";
import heroImg from "../public/herobg.png";
import Image from 'next/image'
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.hero_content}>
          <h1>Need A Website?</h1>
          <p>
            Give your business and brand a wider reach with a unique website
            tailored for your target audience
          </p>
          <div className={styles.btn_container}>
            <Link className={styles.contact_link} href="/contact">
              Get Started
            </Link>
          </div>
        </div>
        <div className={styles.hero_img}>
          <Image src="/herobg.png" height={200} width={400} alt="best web development agency in Nigeria" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
