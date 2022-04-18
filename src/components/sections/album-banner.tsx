import styles from '../../styles/sections/Album_Banner.module.css'
import Album_Tile from '../molecules/album-tile'
import Subtitle_Bar_2 from '../molecules/subtitle-bar-2'

type Album_Banner_Props = {
  albumTitle: string
  albumCover: Sanity_Image
  altText: string
  slug: string
}

const Album_Banner = ({ albumTitle, albumCover, altText, slug }: Album_Banner_Props) => {
  return (
    <>
      <Subtitle_Bar_2></Subtitle_Bar_2>
      <div className={styles.Album_Banner + ' album-banner'}>
        <Album_Tile albumTitle={albumTitle} albumCover={albumCover} altText={altText} slug={slug}></Album_Tile>
      </div>
    </>
  )
}

export default Album_Banner