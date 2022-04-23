import styles from '../../styles/sections/Track_List.module.css'
import SoundCloud_Track from '../atoms/soundcloud-track'
import Subtitle_Bar_2 from '../molecules/subtitle-bar-2'

type Track_List_Props = {
  tracks: Array<Soundcloud_Track>
}

const Track_List = ({ tracks }: Track_List_Props) => {
  return (
    <>
      <Subtitle_Bar_2 text="Selected Listenings"></Subtitle_Bar_2>
      <div className={styles.Track_List + ' track-list'}>
        <SoundCloud_Track trackId={tracks[0].trackID}></SoundCloud_Track>
        <SoundCloud_Track trackId={tracks[1].trackID}></SoundCloud_Track>
        <SoundCloud_Track trackId={tracks[2].trackID}></SoundCloud_Track>
        <SoundCloud_Track trackId={tracks[3].trackID}></SoundCloud_Track>
        <SoundCloud_Track trackId={tracks[4].trackID}></SoundCloud_Track>
        <SoundCloud_Track trackId={tracks[5].trackID}></SoundCloud_Track>
      </div>
    </>
  )
}

export default Track_List