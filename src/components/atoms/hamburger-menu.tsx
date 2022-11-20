import styles from '../../styles/atoms/Hamburger_Menu.module.css'
import hamburgerMenu from '../../../public/assets/hamburger-menu.png'
import Image from 'next/image'

const Hamburger_Menu = () => {
  return (
    <Image src={hamburgerMenu} alt="Menu" className={styles.Hamburger_Menu + ' hamburger-menu'} />
  );
};

export default Hamburger_Menu