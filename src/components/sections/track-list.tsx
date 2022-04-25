import styles from '../../styles/sections/Track_List.module.css'
import Subtitle_Bar_2 from '../molecules/subtitle-bar-2'
import tracksRender from '../../scripts/tracksRender'

type Track_List_Props = {
  tracks: Array<Tracks>
}

const Track_List = ({ tracks }: Track_List_Props) => {
  return (
    <>
      <Subtitle_Bar_2 text="Selected Listenings"></Subtitle_Bar_2>
      <div className={styles.Track_List + ' track-list'}>
        {tracksRender(tracks).map(
          (component) => { return component }
        )}
      </div>
    </>
  )
}

export default Track_List