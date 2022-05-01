import styles from '../../styles/atoms/SoundCloud_Track.module.css'

type SoundCloud_Props = {
  trackId: string
}

const SoundCloud = ({ trackId }: SoundCloud_Props) => {

  const trackUrl = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&color=%230051cc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true&download=false`

  return (
    <div className={styles.SoundCloud_Track}>
      <iframe
        width="100%"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={trackUrl}
      ></iframe>
    </div>
  )
}

export default SoundCloud