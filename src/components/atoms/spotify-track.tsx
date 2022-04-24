import styles from '../../styles/atoms/Spotify_Track.module.css'

const Spotify_Track = () => {
  return (
    <div className={styles.Spotify_Track}>
      <iframe
        src="https://open.spotify.com/embed/track/4y8vzhw6yQKOeUQ5T48rVR?utm_source=generator"
        width="100%"
        height="80"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  )
}

export default Spotify_Track