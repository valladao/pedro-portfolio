/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/sections/Hero_Image.module.css'
import buildImageUrl from '../../scripts/build-image-url';

type Hero_Image_Props = {
  imageDesktop: Sanity_Image,
  imageMobile: Sanity_Image
}

const Hero_Image = ({ imageDesktop, imageMobile }: Hero_Image_Props) => {

  return (
    <picture>
      <source
        srcSet={buildImageUrl(imageDesktop)}
        media="(min-width: 920px)"
      />
      <img className={styles.Hero_Image} src={buildImageUrl(imageMobile)} alt="Pedro H Valladao - Music Composer" />
    </picture>
  );
};

export default Hero_Image