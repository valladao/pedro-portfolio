import styles from '../../styles/atoms/YouTube_Track.module.css'

const YouTube_Track = () => {
  return (
    <div className={styles.YouTube_Track}>
      <iframe
        width="100%"
        src="https://www.youtube.com/embed/Cd9SrB2ZuLI?start=12"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default YouTube_Track