import styles from '../../styles/sections/Album_Hero_Banner.module.css'
import Album_Tile from '../molecules/album-tile'
import Name_Bar from './name-bar'

const backgroundImage = {
  backgroundImage: 'url(https://i.ibb.co/tqh4f3q/background-mobile.jpg)'
}

const Album_Hero_Banner = ({albumTitle, shortTitle, albumCover, altText}: Album_Hero_Banner) => {
  return (
    <div className="album-hero-banner">
      <div className={styles.Album_Hero_Banner} style={backgroundImage}>
        <Album_Tile albumTitle={albumTitle} albumCover={albumCover} altText={altText}></Album_Tile>
      </div>
      <Name_Bar fullName={albumTitle} shortName={shortTitle}></Name_Bar>
    </div>
  )
}

export default Album_Hero_Banner