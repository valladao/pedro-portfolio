import Header_Line from "../atoms/header-line";
import Subtitle_1 from "../atoms/subtitle-1";
import Title_1 from "../atoms/title-1";
import styles from '../../styles/molecules/Head_Title.module.css'
import Link from "next/link";

const Head_Title = () => {
  return (

    <div className={styles.Head_Title + ' head-title'}>
      <Link href="/">
        <a>
          <Title_1></Title_1>
          <Header_Line></Header_Line>
          <Subtitle_1></Subtitle_1>
        </a>
      </Link>
    </div>

   );
};

export default Head_Title;