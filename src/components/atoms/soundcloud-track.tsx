import styles from '../../styles/atoms/SoundCloud_Track.module.css'

const SoundCloud = () => {
  return (
    <div className={styles.SoundCloud_Track}>
      <iframe
        width="100%"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/142174239&color=%230051cc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true&download=false"
      ></iframe>
    </div>
  )
}

export default SoundCloud