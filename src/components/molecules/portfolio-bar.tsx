import styles from '../../styles/molecules/Portfolio_Bar.module.css'
import Subtitle_3 from '../atoms/subtitle-3';

type PortfolioBarProps = {
  title?: string
}

const Portfolio_Bar = ({ title }: PortfolioBarProps) => {
  return (
    <div className={styles.Portfolio_Bar + ' portfolio-bar'}>
      <Subtitle_3 title={title}></Subtitle_3>
    </div>
  )
}

export default Portfolio_Bar
