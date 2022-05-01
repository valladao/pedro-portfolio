import styles from '../../styles/atoms/Release_Date.module.css'

type Release_Date_Props = {
  releaseDate?: number
}

const Release_Date = ({ releaseDate }: Release_Date_Props) => {
  return (
    <h3 className={styles.Release_Date}>{releaseDate}</h3>
  )
}

export default Release_Date