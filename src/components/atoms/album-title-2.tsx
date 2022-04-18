import styles from '../../styles/atoms/Album_Title_2.module.css'

type Album_Title_2_Type = {
  albumTitle: string
}

const Album_Title_2 = ({ albumTitle }: Album_Title_2_Type) => {
  return (
    <h3 className={styles.Album_Title_2}>
      {albumTitle}
    </h3>
  );
};

export default Album_Title_2;