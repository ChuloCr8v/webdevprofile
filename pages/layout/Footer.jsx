import styles from "../../styles/Footer.module.scss";
import {
  FaCopyright,
  FaFacebook,
  FaPhoneSquare,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h1>Logo</h1>
        <nav className={styles.nav}>
          <h2 className={styles.subheading}>Menu</h2>
          <ol className={styles.menu}>
            <li className={styles.menu_item}>Home</li>
            <li className={styles.menu_item}>Services</li>
            <li className={styles.menu_item}>About</li>
            <li className={styles.menu_item}>Testimonials</li>
            <li className={styles.menu_item}>Contact</li>
          </ol>
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
