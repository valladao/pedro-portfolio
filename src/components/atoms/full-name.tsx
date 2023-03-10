import styles from '../../styles/atoms/Full_Name.module.css'

const Full_Name = ({name}: {name: string}) => {
  return (
    <p className={styles.Full_Name}>{name}</p>
  )
}

export default Full_Name