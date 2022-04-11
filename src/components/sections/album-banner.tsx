import styles from '../../styles/sections/Album_Banner.module.css'
import Album_Tile from '../molecules/album-tile'
import Subtitle_Bar_2 from '../molecules/subtitle-bar-2'

const Album_Banner = () => {
  return (
    <>
      <Subtitle_Bar_2></Subtitle_Bar_2>
      <div className={styles.Album_Banner + ' album-banner'}>
        <Album_Tile></Album_Tile>
      </div>
    </>
  )
}

export default Album_Banner