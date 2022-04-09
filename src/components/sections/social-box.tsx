import styles from '../../styles/sections/Social_Box.module.css'
import Apple_Icon from '../atoms/apple-icon'
import Instagram_Icon from '../atoms/instagram-icon'
import Spotify_Icon from '../atoms/spotify-icon'
import YouTube_Icon from '../atoms/youtube-icon'

const Social_Box = () => {
  return (
    <div className={styles.Social_Box + ' social-box'}>
      <Apple_Icon></Apple_Icon>
      <YouTube_Icon></YouTube_Icon>
      <Spotify_Icon></Spotify_Icon>
      <Instagram_Icon></Instagram_Icon>
    </div>
  )
}

export default Social_Box