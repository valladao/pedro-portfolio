import {useEffect, useState} from 'react'
import buildImageUrl from '../../scripts/build-image-url'
import styles from '../../styles/sections/Album_Banner.module.css'
import Album_Tile from '../molecules/album-tile'
import Subtitle_Bar_2 from '../molecules/subtitle-bar-2'

type Album_Banner_Props = {
  albumTitle: string
  albumCover: Sanity_Image
  altText: string
  slug: string
  imageDesktop: Sanity_Image
  imageMobile: Sanity_Image
}

const Album_Banner = ({albumTitle, albumCover, altText, slug, imageDesktop, imageMobile}: Album_Banner_Props) => {

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
    <>
      <Subtitle_Bar_2 text="Recent Works & Releases"></Subtitle_Bar_2>
      <div style={backgroundImage} className={styles.Album_Banner + ' album-banner'}>
        <Album_Tile albumTitle={albumTitle} albumCover={albumCover} altText={altText} slug={slug}></Album_Tile>
      </div>
    </>
  )
}

export default Album_Banner