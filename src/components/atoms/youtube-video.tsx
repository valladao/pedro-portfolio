import styles from '../../styles/atoms/YouTube_Video.module.css'

const YouTube_Video = () => {
  return (
    <iframe
      src="https://www.youtube.com/embed/4OLZvgzqdaA"
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