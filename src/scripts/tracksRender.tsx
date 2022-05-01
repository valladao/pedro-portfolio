import SoundCloud_Track from '../components/atoms/soundcloud-track'
import Spotify_Track from '../components/atoms/spotify-track'
import YouTube_Track from '../components/atoms/youtube-track'

const trackRender = (track: Tracks) => {
  switch (track._type) {
    case "soundcloudTrack":
      return (
        <SoundCloud_Track
          key={track._key}
          trackId={track.trackID}
        ></SoundCloud_Track>
      )

    case "spotifyTrack":
      return (
        <Spotify_Track
          key={track._key}
          trackId={track.trackID}
        ></Spotify_Track>
      )

    case "youtubeTrack":
      return (
        <YouTube_Track
          key={track._key}
          trackId={track.trackID} startTime={track.startTime}
        ></YouTube_Track>
      )

    default:
      break
  }
}

export default function tracksRender(tracks: Array<Tracks>) {
  let renderedTracks: Array<React.ReactNode> = []

  for (const track of tracks) {
    renderedTracks.push(trackRender(track))
  }

  return renderedTracks
}
