import Menu_Link from "../atoms/menu-link"

const Menu_Mobile = () => {
  return (
    <nav>
      <ul>
        <Menu_Link href="/about" title="About"></Menu_Link>
        <Menu_Link href="/portfolio" title="Portfolio"></Menu_Link>
        <Menu_Link href="/contact" title="Contact"></Menu_Link>
      </ul>
    </nav>
  )
}

export default Menu_Mobile