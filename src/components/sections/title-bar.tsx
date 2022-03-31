import styles from '../../styles/sections/Page_Title.module.css'
import Page_Title from "../atoms/page-title";

type Title_Bar_Props = {
  pageTitle: string
}

const Title_Bar = ({ pageTitle }: Title_Bar_Props) => {
  return (
    <div className={styles.Title_Bar + ' title-bar'}>
      <Page_Title pageTitle={pageTitle}></Page_Title>
    </div>
  );
};

export default Title_Bar;