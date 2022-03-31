import styles from '../../styles/sections/Page_Title.module.css'
import Page_Title from "../atoms/page-title";

const Title_Bar = () => {
  return (
    <div className={styles.Title_Bar}>
      <Page_Title></Page_Title>
    </div>
  );
};

export default Title_Bar;