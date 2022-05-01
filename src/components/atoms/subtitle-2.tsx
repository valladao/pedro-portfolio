import styles from '../../styles/atoms/Subtitle_2.module.css'

type Subtitle_2_Props = {
  text: string
}

const Subtitle_2 = ({ text }: Subtitle_2_Props) => {
  return (
    <h2 className={styles.Subtitle_2}>{text}</h2>
  )
}

export default Subtitle_2