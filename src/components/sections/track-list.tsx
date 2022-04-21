import styles from '../../styles/sections/Track_List.module.css'
import SoundCloud_Track from '../atoms/soundcloud-track';

const Track_List = () => {
  return (
    <div className={styles.Track_List + ' track-list'}>
      <SoundCloud_Track></SoundCloud_Track>
      <SoundCloud_Track></SoundCloud_Track>
      <SoundCloud_Track></SoundCloud_Track>
      <SoundCloud_Track></SoundCloud_Track>
      <SoundCloud_Track></SoundCloud_Track>
      <SoundCloud_Track></SoundCloud_Track>
    </div>
  );
};

export default Track_List;