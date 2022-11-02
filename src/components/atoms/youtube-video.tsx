import styles from '../../styles/atoms/YouTube_Video.module.css'

const YouTube_Video = ({ trackId, startTime }: YouTube_Track_Props) => {

  let trackUrl = `https://www.youtube.com/embed/${trackId}`

  if (startTime != 0) trackUrl += `?start=${startTime}`

  return (
    <iframe
      src={trackUrl}
      className={styles.YouTube_Video}
      width="1440"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  )
}

export default YouTube_Video