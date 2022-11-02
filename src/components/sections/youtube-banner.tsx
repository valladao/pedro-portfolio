import YouTube_Video from '../atoms/youtube-video'
import Subtitle_Bar_2 from '../molecules/subtitle-bar-2'

type YouTube_Banner_Props = {
  trackId: string
  startTime: number
  albumTitle: string
}

const YouTube_Banner = ({ trackId, startTime, albumTitle }: YouTube_Banner_Props) => {
  return (
    <>
      <YouTube_Video trackId={trackId} startTime={startTime} ></YouTube_Video>
      <Subtitle_Bar_2 text={albumTitle}></Subtitle_Bar_2>
    </>
  )
}

export default YouTube_Banner