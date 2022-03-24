import Image from "next/image";
import styles from '../../styles/atoms/Hamburger_Menu.module.css'

const Hamburger_Menu = () => {
  return (
    <Image
      className={styles.Hamburger_Menu}
      src="/assets/hamburger-menu.png"
      alt="Menu"
      width={34}
      height={34}
    />
  );
};

export default Hamburger_Menu;