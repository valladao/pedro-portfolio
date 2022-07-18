import styles from '../../styles/sections/Text_with_Photo.module.css'

const Text_with_Photo = () => {
  return (
    <div className={styles.Text_with_Photo}>
      <p>
        Under Streetlight was Pedro’s debut work for the screen and marked the
        beginning of a long collaborative period with Sebastian Li. The film
        dated from 2016, however it only received its original soundtrack in
        2019, after Pedro and Sebastian met in their first year at university.
        This was the first opportunity for Pedro to have a professional take on
        his music composition. Indeed, this soundtrack shows the composer’s
        expertise in generating beautiful melodies that fitted the moods of the
        screen.
      </p>
      <img src="/assets/hamburger-menu.png" alt="Me and Seb" />
    </div>
  );
};

export default Text_with_Photo;