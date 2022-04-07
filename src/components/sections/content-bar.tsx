import styles from '../../styles/sections/Content_Bar.module.css'
import Content_Title from '../atoms/content-title';

const Content_Bar = () => {
  return (
    <div className={styles.Content_Bar}>
      <Content_Title></Content_Title>
    </div>
  );
};

export default Content_Bar;