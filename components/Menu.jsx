import styles from '../styles/Menu.module.scss'
import {FaTimes} from 'react-icons/fa'

const Menu = ({showMenu, setShowMenu }) => {
  return(
      <nav className={showMenu ? styles.open_nav : styles.nav}>
        <FaTimes className={styles.close_icon} onClick = {() => setShowMenu(false)}  />
        <ol className={styles.menu}>
          <li className={styles.menu_item}>Home</li>
          <li className={styles.menu_item}>Services</li>
          <li className={styles.menu_item}>About</li>
          <li className={styles.menu_item}>Testimonials</li>
          <li className={styles.menu_item}>Contact</li>
        </ol>
      </nav>
    )
}

export default Menu