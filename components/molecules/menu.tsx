import Menu_Link from "../atoms/menu-link"
import styles from '../../styles/molecules/Menu.module.css'

type Menu_Props = {
  mobile?: boolean
}

const Menu = ({ mobile = true }: Menu_Props) => {
  let menuClass = mobile ? styles.Menu_Mobile : styles.Menu_Desktop
  return (
    <nav className={menuClass + ' menu'}>
      <ul>
        <Menu_Link href="/about" title="About"></Menu_Link>
        <Menu_Link href="/portfolio" title="Portfolio"></Menu_Link>
        <Menu_Link href="/contact" title="Contact"></Menu_Link>
      </ul>
    </nav>
  )
}

export default Menu