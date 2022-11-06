/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/sections/Hero_Image.module.css'
import buildImageUrl from '../../scripts/build-image-url';

type Hero_Image_Props = {
  imageDesktop: Sanity_Image,
  imageMobile: Sanity_Image,
  altText: string
}

const Hero_Image = ({ imageDesktop, imageMobile, altText }: Hero_Image_Props) => {

  return (
    <picture>
      <source
        srcSet={buildImageUrl(imageDesktop)}
        media="(min-width: 920px)"
      />
      <img className={styles.Hero_Image + ' hero-image'} src={buildImageUrl(imageMobile)} alt={altText} />
    </picture>
  );
};

export default Hero_Image