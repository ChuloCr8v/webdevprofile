import styles from "../../styles/Footer.module.scss";
import {
  FaCopyright,
  FaFacebook,
  FaPhoneSquare,
  FaTwitter,
} from "react-icons/fa";
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.about}>
          <h1>Logo</h1>
          <p>
            <span>
              Clever Developers, we are a website design and development company
              dedicated to helping businesses and brands boost their online
              presence and increase their reach.
            </span>{" "}
            {/* We specialize in the design and building of modern, stunning and
            fast loading websites for different businesses and brands. we are a
            professional team of experts determined to give your brand a
            deserved online presence through the creation of bespoke websites as
            well as SEO services. */}
          </p>
        </div>
        <nav className={styles.nav}>
          <h2 className={styles.subheading}>Menu</h2><div className={styles.menu}>
          <Link href="/">
            <a className={styles.menu_item}>
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className={styles.menu_item}>
              About
            </a>
          </Link>
          <Link href="/services" className={styles.menu_item}>
            <a className={styles.menu_item}>
              Services
            </a>
          </Link>
          <Link href="/projects">
            <a className={styles.menu_item}>
              Projects
            </a>
          </Link>
          <Link href="/contact" >
            <a className={styles.menu_item}>
              Contact
            </a> 
          </Link>
        </div>
          
        </nav>
        <div className={styles.contact}>
          <h2 className={styles.subheading}>Contact</h2>
          <div className={styles.social_icons}>
            <FaFacebook className={styles.icon} />
            <FaTwitter className={styles.icon} />
          </div>
          <div className={styles.phone}>
            <FaPhoneSquare className={styles.icon} />
            <p>08138369977</p>
          </div>
        </div>
        <div className={styles.copyright}>
          <FaCopyright className={styles.icon} />
          <p>2022 Clever Developers. All Rights Resrved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
