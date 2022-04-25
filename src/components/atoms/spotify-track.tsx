import styles from '../../styles/atoms/Spotify_Track.module.css'

type Spotify_Track_Props = {
  trackId: string
}

const Spotify_Track = ({ trackId }: Spotify_Track_Props) => {

  const trackUrl = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`

  return (
    <div className={styles.Spotify_Track}>
      <iframe
        src={trackUrl}
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