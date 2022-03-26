import Head_Title from "../molecules/head-title"
import Menu_Bar from "../molecules/menu-bar"
import Menu from "../molecules/menu"
import styles from "../../styles/organisms/Header.module.css"

const Header = () => {
  return (
    <div className={styles.Header + ' header'}>
      <Head_Title></Head_Title>
      <Menu_Bar></Menu_Bar>
      <Menu></Menu>
      <Menu mobile={false}></Menu>
    </div>
  );
};

export default Header