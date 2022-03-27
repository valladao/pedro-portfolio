import Hamburger_Menu from "../atoms/hamburger-menu";
import styles from '../../styles/molecules/Menu_Bar.module.css'

// Scripts added to create Menu animation
const openMenu = () => {
  const menuBar = document.querySelector(".menu-bar")
  const menu = document.querySelector(".menu")
  const hamburgerMenu = document.querySelector(".hamburger-menu")

  let menuMobileOpen = false

  // On menu click
  if (menuBar && menu && hamburgerMenu) {
    if (!menuMobileOpen) {
      menu.classList.add("move-in")
      hamburgerMenu.classList.add("rotate-90-cw")
      menuMobileOpen = true
    } else {
      menu.classList.remove("move-in")
      hamburgerMenu.classList.remove("rotate-90-cw")
      menuMobileOpen = false
    }
  }
}

const Menu_Bar = () => {
  return (
    <div className={styles.Menu_Bar + ' menu-bar'} onClick={openMenu}>
      <Hamburger_Menu></Hamburger_Menu>
    </div>

  );
};

export default Menu_Bar;