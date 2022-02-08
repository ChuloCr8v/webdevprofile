import styles from "../styles/Why.module.scss";
import Heading from "./Heading";
import { FaDesktop } from "react-icons/fa";
import modern from "../public/modern.png";
import responsive from "../public/device.png";
import practices from "../public/practices.png";
const Why = () => {
  return (
    <section id={styles.why}>
      <div className={styles.container}>
        <Heading text={"Why work with us?"} />
        <div className={styles.why_container}>
          <div className={styles.why}>
            <FaDesktop className={styles.icon} />
            <h3>Responsive And Fluid Design</h3>
            <p>
              We create websites that are designed and optimized to work across
              all devices. This includes mobile phones, tablets, laptops and
              widescreen computers. This will make your website easily
              accessible by anyone, no matter what device they are on.
            </p>
          </div>
          <div className={styles.why}>
            <FaDesktop className={styles.icon} />
            <h3>Clean & Modern UI</h3>
            <p>
              We provide some of the cleanest and elegant user interfaces that
              are guaranteed to afford your website visitors with a great and
              unique experience each time. This is defined in our choice of
              icons, fonts, pictures and other media, so as to ensure
              aesthetically attractive designs and delivery.
            </p>
          </div>
          <div className={styles.why}>
            <FaDesktop className={styles.icon} />
            <h3>Best Website Development Practices</h3>
            <p>
              We ensure that our deliveries conform whith the latest updates and
              best practices within the website development world. This inlcudes
              ensuring that your website has a faster load time while being
              light and easily accessible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
