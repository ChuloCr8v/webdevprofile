import styles from '../../styles/Header.module.scss'
import {FaBars} from 'react-icons/fa'
import Menu from '../../components/Menu'
import {useState} from 'react'

const Header = () => {
  
  const [showMenu, setShowMenu] = useState(false)
  
  return(
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo_container}>
          <p>Logo </p>
        </div>
        <div className={styles.menu_container}>
          <FaBars onClick={() => {setShowMenu(!showMenu)}} /> 
          <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
        </div>
      </div>
    </header>
    )
}

export default Header 