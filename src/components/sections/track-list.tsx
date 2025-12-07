import styles from '../../styles/sections/Track_List.module.css'
import Subtitle_Bar_2 from '../molecules/subtitle-bar-2'
import tracksRender from '../../scripts/tracksRender'
import { PortableText } from '@portabletext/react'

type Track_List_Props = {
  title?: string
  description?: Array<Block>
  tracks: Array<Tracks>
}

const Track_List = ({ title, description, tracks }: Track_List_Props) => {
  const hasDescription = !!description?.length
  const threeOrMoreTracks = tracks.length >= 3
  const trackListClassNames = [
    styles.Track_List,
    threeOrMoreTracks ? styles["3_Columns"] : '',
    'track-list'
  ].filter(Boolean).join(' ')

  return (
    <>
      <Subtitle_Bar_2 text={title || ''}></Subtitle_Bar_2>
      {hasDescription && (
        <div className={styles.Description}>
          <PortableText value={description}></PortableText>
        </div>
      )}
      <div className={trackListClassNames}>
        {tracksRender(tracks).map(
          (component) => { return component }
        )}
      </div>
    </>
  )
}

export default Track_List
