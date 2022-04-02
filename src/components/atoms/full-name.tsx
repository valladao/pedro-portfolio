import styles from '../../styles/atoms/Full_Name.module.css'

type Full_Name_Props = {
  fullName: string
}

const Full_Name = ({ fullName }: Full_Name_Props) => {
  return (
    <p className={styles.Full_Name}>{fullName}</p>
  )
}

export default Full_Name