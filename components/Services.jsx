import styles from '../styles/Services.module.scss'
import {FaGlobe} from 'react-icons/fa'
const Services = () => {
  return (
      <section className={styles.services}>
        <div className={styles.service}>
          <FaGlobe className={styles.icon} />
          <h3>Website Development </h3>
          <p> We design and develop highly responsive, beautiful and scalable websites for all businesses and organisations </p>
        </div>
      </section>
    )
}

export default Services