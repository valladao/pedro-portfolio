import { useState } from "react";
import Hamburger_Menu from "../atoms/hamburger-menu";
import styles from '../../styles/molecules/Menu_Bar.module.css'

const Menu_Bar = () => {

  // Scripts added to create Menu animation

  // Control if the menu is opened (true) or closed (false)
  const [menuMobileStatus, setMenuMobileStatus] = useState(false);

  // Function to open menu
  const openMenu = () => {
    // On menu click
    const menuBar = document.querySelector(".menu-bar")
    const menu = document.querySelector(".menu")
    const hamburgerMenu = document.querySelector(".hamburger-menu")

    if (menuBar && menu && hamburgerMenu) {
      if (!menuMobileStatus) {
        menu.classList.add("move-in")
        hamburgerMenu.classList.add("rotate-90-cw")
        setMenuMobileStatus(true)
      } else {
        menu.classList.remove("move-in")
        hamburgerMenu.classList.remove("rotate-90-cw")
        setMenuMobileStatus(false)
      }
    }
  }

  return (
    <div className={styles.Menu_Bar + ' menu-bar'} onClick={openMenu}>
      <Hamburger_Menu></Hamburger_Menu>
    </div>

  );
};

export default Menu_Bar;