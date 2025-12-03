import styles from '../../styles/sections/Hero_Image.module.css'
import buildImageUrl from '../../scripts/build-image-url';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Hero_Image_Props = {
  imageDesktop: Sanity_Image,
  imageMobile: Sanity_Image,
  altText: string
}

const Hero_Image = ({ imageDesktop, imageMobile, altText }: Hero_Image_Props) => {

  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const desktopUrl = buildImageUrl(imageDesktop)
  const mobileUrl = buildImageUrl(imageMobile)

  useEffect(() => {

    const titleBar = document.getElementsByClassName('title-bar')
    const hasTitleBar = titleBar[0] ? true : false

    function handleResize() {

      setWidth(window.innerWidth)

      if (hasTitleBar) {
        if (width > 639) {
          setHeight(window.innerHeight - 233)
        } else {
          setHeight(window.innerHeight - 226.5)
        }
      } else {
        if (width > 639) {
          setHeight(window.innerHeight - 254.5)
        } else {
          setHeight(window.innerHeight - 239.5)
        }
      }
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    };
  });

  if (!desktopUrl || !mobileUrl) return null

  if (width > 639) {
    return (
      <Image
        src={desktopUrl}
        placeholder="blur"
        blurDataURL={desktopUrl + '?blur=100'}
        alt={altText}
        width={width}
        height={height}
        className={styles.Hero_Image + ' hero-image'}
        priority
      />
    )
  } else {
    return (
      <Image
        src={mobileUrl}
        alt={altText}
        width={width}
        height={height}
        className={styles.Hero_Image + ' hero-image'}
        priority
      />
    )
  }
};

export default Hero_Image
