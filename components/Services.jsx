import styles from "../styles/Services.module.scss";
import { FaGlobe, FaShoppingCart, FaPen } from "react-icons/fa";
import Heading from "./Heading";

const Services = () => {
  return (
    <section className={styles.services}>
      <Heading text={"What we do"} />
      <div className={styles.container}>
        <div className={styles.service}>
          <FaGlobe className={styles.icon} />
          <h3>Website Development/Re-Design </h3>
          <p>
            {" "}
            We design and develop highly responsive, beautiful and scalable
            websites for all businesses and organisations. We also improve
            already exisiting websites for faster loading time and improved
            modern appearnace.
          </p>
        </div>
        <div className={styles.service}>
          <FaShoppingCart className={styles.icon} />
          <h3>Ecommerce Store Development</h3>
          <p>
            {" "}
            We design and develop online shopping platforms for your online
            businesses, enabling you to target customers throughout the globe.
            We work with varying ecommerce platforms including WooCommerce,
            Shopify, BigCommerce and other platforms of your choice.
          </p>
        </div>
        <div className={styles.service}>
          <FaPen className={styles.icon} />
          <h3>Content Creation</h3>
          <p>
            We create well tailored contents suitable for passing whatever
            message you have for your clients to keep them enagaged as well as
            discover important information about your brands and services.
          </p>
        </div>
        <div className={styles.service}>
          <FaGlobe className={styles.icon} />
          <h3>Website SE0</h3>
          <p>
            Our contents are SEO compliant and will rank your business on Google
            pages, giving you a wider outreach at the same time, targetting your
            desired customers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
