import styles from "../../styles/Header.module.scss";
import { FaBars } from "react-icons/fa";
import Menu from "../../components/Menu";
import { useState, useEffect } from "react";
import Image from 'next/image'
import Logo from '../../public/images/cd-logo.png'
import Link from 'next/link'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      screen.width > 900 ? setShowMenu(true) : setShowMenu(false);
    });
    return () => {
      window.removeEventListener("resize", () => {
        screen.width > 900 ? setShowMenu(true) : setShowMenu(false);
      });
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo_container}>
          <Link href="/">
            <a>
              <Image src={Logo} height="40" width="150" />
            </a>
          </Link>
        </div>
        <div className={styles.menu_container}>
          <FaBars
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className={styles.icon}
          />
          <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
