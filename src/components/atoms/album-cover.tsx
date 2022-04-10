import styles from '../../styles/atoms/Album_Cover.module.css'

const Album_Cover = () => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={styles.Album_Cover}
      src="https://i.ibb.co/T2Yk6sp/album-cover.jpg"
      alt=""
    />
  )
}

export default Album_Cover