import styles from '../styles/Menu.module.scss'
import {FaTimes} from 'react-icons/fa'
import Link from 'next/link'

const Menu = ({showMenu, setShowMenu }) => {
  return(
      <nav className={showMenu ? styles.open_nav : styles.nav}>
        <FaTimes className={styles.close_icon} onClick = {() => setShowMenu(false)}  />
        <div className={styles.menu}>
          <Link href="/">
            <a className={styles.menu_item} onClick={() => setShowMenu(false)}>
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className={styles.menu_item} onClick={() => setShowMenu(false)}>
              About
            </a>
          </Link>
          <Link href="/services" className={styles.menu_item}>
            <a className={styles.menu_item} onClick={() => setShowMenu(false)}>
              Services
            </a>
          </Link>
          <Link href="/projects">
            <a className={styles.menu_item} onClick={() => setShowMenu(false)}>
              Projects
            </a>
          </Link>
          <Link href="/contact" >
            <a className={styles.menu_item} onClick={() => setShowMenu(false)}>
              Contact
            </a> 
          </Link>
        </div>
      </nav>
    )
}

export default Menu