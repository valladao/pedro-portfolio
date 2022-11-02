import styles from '../../styles/molecules/Subtitle_Bar_2.module.css'
import Subtitle_2 from '../atoms/subtitle-2'

type Subtitle_Bar_2_Props = {
  text: string
}

const Subtitle_Bar_2 = ({ text }: Subtitle_Bar_2_Props) => {
  if (text) {
    return (
      <div className={styles.Subtitle_Bar_2 + ' subtitle-bar-2'}>
        <Subtitle_2 text={text}></Subtitle_2>
      </div>
    )
  } else { return (<></>) }
}

export default Subtitle_Bar_2