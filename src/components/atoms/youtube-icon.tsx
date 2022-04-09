import styles from '../../styles/atoms/YouTube_Icon.module.css'

const YouTube_Icon = () => {
  return (
    <a href="#"><svg className={styles.YouTube_Icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100" height="100"><path d="M56.456 17.442c-.339-1.44-1.421-2.595-2.866-3.053C49.761 13.174 41.454 12 32 12s-17.761 1.174-21.591 2.389c-1.445.458-2.527 1.613-2.866 3.053C6.903 20.161 6 25.203 6 32s.903 11.839 1.544 14.558c.339 1.44 1.421 2.595 2.866 3.053C14.239 50.826 22.546 52 32 52s17.761-1.174 21.591-2.389c1.445-.458 2.527-1.613 2.866-3.053C57.097 43.839 58 38.797 58 32s-.903-11.839-1.544-14.558zM27 40V24l14.857 8L27 40z" /></svg></a>
  )
}

export default YouTube_Icon