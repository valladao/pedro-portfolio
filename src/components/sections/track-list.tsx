import styles from '../../styles/sections/Track_List.module.css'
import SoundCloud_Track from '../atoms/soundcloud-track';
import Subtitle_2 from '../atoms/subtitle-2';
import Subtitle_Bar_2 from '../molecules/subtitle-bar-2';

const Track_List = () => {
  return (
    <>
      <Subtitle_Bar_2></Subtitle_Bar_2>
      <div className={styles.Track_List + ' track-list'}>
        <SoundCloud_Track></SoundCloud_Track>
        <SoundCloud_Track></SoundCloud_Track>
        <SoundCloud_Track></SoundCloud_Track>
        <SoundCloud_Track></SoundCloud_Track>
        <SoundCloud_Track></SoundCloud_Track>
        <SoundCloud_Track></SoundCloud_Track>
      </div>
    </>
  );
};

export default Track_List;