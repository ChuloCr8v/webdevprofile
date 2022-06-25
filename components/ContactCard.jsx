import {FaWhatsapp, FaEnvelope} from 'react-icons/fa'
import styles from '../styles/ContactCard.module.scss'

const ContactCard = () => {
  
  return (
      <div className={styles.contact_card}>
          <div className={styles.contact_item}>
            <div className={styles.icon_wrapper}>
              <FaWhatsapp className={styles.icon} />
            </div>
            <p className={styles.contact_detail}>
              08138369977
            </p>
          </div>
          <div className={styles.contact_item}>
            <div className={styles.icon_wrapper}>
              <FaEnvelope className={styles.icon} />
            </div>
            <a className={styles.contact_detail} href="mailto:cleverdeveloper360@gmail.com">
              cleverdeveloper360@gmail.com
            </a>
          </div>
      </div>
   )
   
}

export default ContactCard