import {useEffect, useState} from 'react';
import buildImageUrl from '../../scripts/build-image-url';
import styles from '../../styles/sections/Album_Hero_Banner.module.css'
import Album_Tile from '../molecules/album-tile'
import Name_Bar from './name-bar'

const Album_Hero_Banner = ({albumTitle, shortTitle, albumCover, altText, description, imageDesktop, imageMobile}: Album_Hero_Banner) => {

  const [width, setWidth] = useState<number>(0)
  const [backgroundImage, setBackgroundImage] = useState({})

  useEffect(() => {

    function handleResize() {

      setWidth(window.innerWidth)

      if (width > 639) {
        setBackgroundImage({
          backgroundImage: `url(${buildImageUrl(imageDesktop)})`
        })
      } else {
        setBackgroundImage({
          backgroundImage: `url(${buildImageUrl(imageMobile)})`
        })
      }
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    };

  }, [imageDesktop, imageMobile, width])

  return (
    <div className={styles.Album_Hero_Banner + ' album-hero-banner'}>
      <div style={backgroundImage}>
        <div className={styles.Album_Hero_Banner_Text}>
          <p>{description}</p>
        </div>
        <Album_Tile albumTitle={albumTitle} albumCover={albumCover} altText={altText}></Album_Tile>
      </div>
      <Name_Bar fullName={albumTitle} shortName={shortTitle}></Name_Bar>
      <div className={styles.Album_Hero_Banner_Text}>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Album_Hero_Banner
