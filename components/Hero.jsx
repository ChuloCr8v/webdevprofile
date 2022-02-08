import styles from "../styles/Hero.module.scss";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>Need A Website?</h1>
        <p>
          Give your business and brand a wider reach with a unique website
          tailored for your target audience
        </p>
        <div className={styles.btn_container}>
          <Link className={styles.contact_link} href="#">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
