import styles from '../../styles/atoms/YouTube_Track.module.css'

const YouTube_Track = ({ trackId, startTime }: YouTube_Track_Props) => {

  let trackUrl = `https://www.youtube.com/embed/${trackId}`

  if (startTime != 0) trackUrl += `?start=${startTime}`

  return (
    <div className={styles.YouTube_Track}>
      <iframe
        width="100%"
        src={trackUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default YouTube_Track