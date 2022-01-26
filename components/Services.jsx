import styles from '../styles/Services.module.scss'
import {FaGlobe, FaShoppingCart, FaPen} from 'react-icons/fa'
const Services = () => {
  return (
      <section className={styles.services}>
        <div className={styles.service}>
          <FaGlobe className={styles.icon} />
          <h3>Website Development </h3>
          <p> We design and develop highly responsive, beautiful and scalable websites for all businesses and organisations.</p>
        </div>
        <div className={styles.service}>
          <FaShoppingCart className={styles.icon} />
          <h3>Ecommerce Store Development</h3>
          <p> We build online shopping platforms for your online businesses, enabling you to target customers throughout the globe.</p>
        </div>
        <div className={styles.service}>
          <FaPen className={styles.icon} />
          <h3>Content Creation</h3>
          <p>We are also involved in the creation of content that are targeted towards your intended clients. </p>
        </div>
        <div className={styles.service}>
          <FaGlobe className={styles.icon} />
          <h3>Website SE0</h3>
          <p>Our contents are SEO compliant and will rank your business on Google pages, giving you a wider outreach.</p>
        </div>
      </section>
    )
}

export default Services