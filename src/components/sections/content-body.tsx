import styles from '../../styles/sections/Content_Body.module.css'
import Paragraph from '../atoms/paragraph';

const Content_Body = () => {
  return (
    <div className={styles.Content_Body}>
      <Paragraph></Paragraph>
      <Paragraph></Paragraph>
      <Paragraph></Paragraph>
    </div>
  );
};

export default Content_Body;