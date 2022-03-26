import Head_Title from "../molecules/head-title";
import Menu_Bar from "../molecules/menu-bar";
import Menu_Desktop from "../molecules/menu-desktop";
import Menu from "../molecules/menu"

const Header = () => {
  return (
    <div>
      <Head_Title></Head_Title>
      <Menu_Bar></Menu_Bar>
      <Menu></Menu>
      <Menu_Desktop></Menu_Desktop>
    </div>
  );
};

export default Header;