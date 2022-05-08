import YouTube_Video from '../atoms/youtube-video'

const YouTube_Banner = ({ trackId, startTime }: YouTube_Track_Props) => {
  return (
    <>
      <YouTube_Video trackId={trackId} startTime={startTime} ></YouTube_Video>
    </>
  )
}

export default YouTube_Banner