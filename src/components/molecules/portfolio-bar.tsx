import styles from '../../styles/molecules/Portfolio_Bar.module.css'
import Subtitle_3 from '../atoms/subtitle-3';

const Portfolio_Bar = () => {
  return (
    <div className={styles.Portfolio_Bar + ' portfolio-bar'}>
      <Subtitle_3></Subtitle_3>
    </div>
  )
}

export default Portfolio_Bar