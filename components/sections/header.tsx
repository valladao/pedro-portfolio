import Head_Title from "../molecules/head-title";
import Menu_Bar from "../molecules/menu-bar";
import Menu_Desktop from "../molecules/menu-desktop";
import Menu_Mobile from "../molecules/menu-mobile"

const Header = () => {
  return (
    <div>
      <Head_Title></Head_Title>
      <Menu_Bar></Menu_Bar>
      <Menu_Mobile></Menu_Mobile>
      <Menu_Desktop></Menu_Desktop>
    </div>
  );
};

export default Header;