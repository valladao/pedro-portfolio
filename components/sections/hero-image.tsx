/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/sections/Hero_Image.module.css'

const Hero_Image = () => {
  return (
    <picture>
      <source
        srcSet="https://i.ibb.co/McvcVBg/home-desktop.jpg"
        media="(min-width: 920px)"
      />
      <img className={styles.Hero_Image} src="https://i.ibb.co/K9W38HV/home-mobile.jpg" alt="Pedro H Valladao - Music Composer" />
    </picture>
  );
};

export default Hero_Image