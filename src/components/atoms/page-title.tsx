import styles from '../../styles/atoms/Page_Title.module.css'

type Page_Title_Props = {
  pageTitle: string
}

const Page_Title = ({ pageTitle }: Page_Title_Props) => {
  return (
    <h1 className={styles.Page_Title}>{pageTitle}</h1>
  );
};

export default Page_Title