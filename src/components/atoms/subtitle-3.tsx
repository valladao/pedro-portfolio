import styles from '../../styles/atoms/Subtitle_3.module.css'

type Subtitle3Props = {
  title?: string
}

const Subtitle_3 = ({ title = "Discography" }: Subtitle3Props) => {
  return (
    <h2 className={styles.Subtitle_3}>{title}</h2>
  )
}

export default Subtitle_3
