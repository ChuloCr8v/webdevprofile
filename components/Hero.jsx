import styles from "../styles/Hero.module.scss";
import Link from "next/link";
import Image from 'next/image'
import {FaGlobe, FaDraftingCompass, FaLaptopCode, FaInfo, FaSearchengin} from 'react-icons/fa'
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
       
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title} >Need A Website?</h1>
          <p className={styles.hero_subtitle} >
            Give your business and brand a wider reach with a unique website
            tailored for your target audience
          </p>
       {/*   <div className={styles.btn_container}>
            <Link className={styles.btn} href="/contact">
              <a className={styles.btn}>
                Get Started
              </a>
            </Link>
          </div> */} 
          <div className={styles.hero_services} >
            <div className={styles.hero_service} >
              <FaDraftingCompass className={styles.icon} />
              <p className={styles.hero_service_title}>we DESIGN </p>
            </div>
            <div className={styles.hero_service} >
              <FaLaptopCode className={styles.icon} />
              <p className={styles.hero_service_title}>we DEVELOP </p>
            </div>
            <div className={styles.hero_service} >
              <FaInfo className={styles.icon} />
              <p className={styles.hero_service_title}>we SUPPORT</p>
            </div>
            <div className={styles.hero_service} >
              <FaSearchengin className={styles.icon} />
              <p className={styles.hero_service_title}>we OPTIMIZE</p>
            </div>
            </div>
            <div className={styles.btn_wrapper}>
              <Link href="/contact">
                <a className={styles.btn}>
                  Discuss Your Project
                </a>
              </Link>
              <Link href="/projects">
                <a className={styles.btn}>
                  View Our Projects
                </a>
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
