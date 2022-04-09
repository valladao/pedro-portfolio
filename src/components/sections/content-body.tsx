import styles from '../../styles/sections/Content_Body.module.css'
import Paragraph from '../atoms/paragraph'
import { PortableText } from '@portabletext/react'

type Content_Body_Props = {
  portableText: Array<Block>
}

const Content_Body = ({ portableText }: Content_Body_Props) => {
  return (
    <div className={styles.Content_Body}>
      <PortableText
        value={portableText}
      ></PortableText>
    </div>
  )
}

export default Content_Body