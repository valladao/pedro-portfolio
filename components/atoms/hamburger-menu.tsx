import Image from "next/image";
import styles from '../../styles/atoms/Hamburger_Menu.module.css'

const Hamburger_Menu = () => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/assets/hamburger-menu.png" alt="Menu" className={styles.Hamburger_Menu + ' hamburger-menu'} />
  );
};

export default Hamburger_Menu;