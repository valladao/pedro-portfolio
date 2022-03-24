import Hamburger_Menu from "../atoms/hamburger-menu";
import styles from '../../styles/molecules/Menu_Bar.module.css'

const Menu_Bar = () => {
  return (
    <div className={styles.Menu_Bar}>
      <Hamburger_Menu></Hamburger_Menu>
    </div>

  );
};

export default Menu_Bar;