import styles from '../../styles/sections/Album_Hero_Banner.module.css'
import Album_Tile from '../molecules/album-tile'
import Name_Bar from './name-bar'

const backgroundImage = {
  backgroundImage: 'url(https://i.ibb.co/tqh4f3q/background-mobile.jpg)'
}

const Album_Hero_Banner = ({albumTitle, shortTitle, albumCover, altText}: Album_Hero_Banner) => {
  return (
    <div className={styles.Album_Hero_Banner + ' album-hero-banner'}>
      <div style={backgroundImage}>
        <div className={styles.Album_Hero_Banner_Text}>
          <p>These 5 Morceaux (Pieces) for piano are exquisite for their delicacy, imagination, and fantasy. Each one of them transports the listener to a world of dreams and nostalgia, at times playful and exciting but also thoughtful and mellow. They were composed with the pretext of always developing the very first musical thought or melody that arrived at the composer’s hands on the piano. So, they are quite different from each other, and unique themselves. They constituted then compositional exercises but that, regardless of this nature, became great pieces of music.</p>
        </div>
        <Album_Tile albumTitle={albumTitle} albumCover={albumCover} altText={altText}></Album_Tile>
      </div>
      <Name_Bar fullName={albumTitle} shortName={shortTitle}></Name_Bar>
      <div className={styles.Album_Hero_Banner_Text}>
        <p>These 5 Morceaux (Pieces) for piano are exquisite for their delicacy, imagination, and fantasy. Each one of them transports the listener to a world of dreams and nostalgia, at times playful and exciting but also thoughtful and mellow. They were composed with the pretext of always developing the very first musical thought or melody that arrived at the composer’s hands on the piano. So, they are quite different from each other, and unique themselves. They constituted then compositional exercises but that, regardless of this nature, became great pieces of music.</p>
      </div>
    </div>
  )
}

export default Album_Hero_Banner