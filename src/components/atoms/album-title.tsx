import styles from '../../styles/atoms/Album_Title.module.css'

type Album_Title_Props = {
  albumTitle: string
}

const Album_Title = ({ albumTitle }: Album_Title_Props) => {
  return (
    <h2 className={styles.Album_Title}>{albumTitle}</h2>
  )
}

export default Album_Title