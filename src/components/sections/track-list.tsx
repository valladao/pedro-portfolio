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

  return (
    <>
      <Subtitle_Bar_2 text={title || ''}></Subtitle_Bar_2>
      {hasDescription && (
        <div className={styles.Description}>
          <PortableText value={description}></PortableText>
        </div>
      )}
      <div className={styles.Track_List + ' track-list'}>
        {tracksRender(tracks).map(
          (component) => { return component }
        )}
      </div>
    </>
  )
}

export default Track_List
