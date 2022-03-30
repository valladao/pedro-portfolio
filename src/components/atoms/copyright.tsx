import styles from '../../styles/atoms/Copyright.module.css'

const currentYear = new Date().getFullYear()

const Copyright = () => {
  return (
    <p className={styles.Copyright}>©pedrohvalladao {currentYear}</p>
  )
}

export default Copyright