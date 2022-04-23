import styles from '../../styles/sections/Track_List.module.css'
import SoundCloud_Track from '../atoms/soundcloud-track'
import Subtitle_Bar_2 from '../molecules/subtitle-bar-2'

const Track_List = () => {
  return (
    <>
      <Subtitle_Bar_2 text="Selected Listenings"></Subtitle_Bar_2>
      <div className={styles.Track_List + ' track-list'}>
        <SoundCloud_Track trackId="1255510120"></SoundCloud_Track>
        <SoundCloud_Track trackId="142174239"></SoundCloud_Track>
        <SoundCloud_Track trackId="143095171"></SoundCloud_Track>
        <SoundCloud_Track trackId="258302465"></SoundCloud_Track>
        <SoundCloud_Track trackId="257228278"></SoundCloud_Track>
        <SoundCloud_Track trackId="24880470"></SoundCloud_Track>
      </div>
    </>
  )
}

export default Track_List