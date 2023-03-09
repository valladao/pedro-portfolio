import Hero_Image from "../components/sections/hero-image"
import Album_Banner from "../components/sections/album-banner"
import Track_List from "../components/sections/track-list"
import Album_List from "../components/sections/album-list"
import YouTube_Banner from "../components/sections/youtube-banner"
import Content_Body from "../components/sections/content-body"
import Text_with_Photo from "../components/sections/text-with-photo"
import Spotify_Album from "../components/sections/spotify-album"
import Album_Hero_Banner from "../components/sections/album-hero-banner"

const sectionRender = (section: Sections) => {
  switch (section._type) {
    case "heroImage":
      return (
        <Hero_Image
          key={section._key}
          imageDesktop={section.imageDesktop}
          imageMobile={section.imageMobile}
          altText={section.altText}
        ></Hero_Image>
      )

    case "albumBanner":
      return (
        <Album_Banner
          key={section._key}
          albumTitle={section.album.albumTitle}
          albumCover={section.album.albumCover}
          altText={section.album.altText}
          slug={section.album.slug.current}
        ></Album_Banner>
      )

    case "trackList":
      return (
        <Track_List
          key={section._key}
          tracks={section.tracks}
        ></Track_List>
      )

    case "albumList":
      return (
        <Album_List
          key={section._key}
          albuns={section.albunsList}
        ></Album_List>
      )

    case "youtubeVideo":
      return (
        <YouTube_Banner
          key={section._key}
          trackId={section.trackID}
          startTime={section.startTime}
          albumTitle={section.withTitle}
        ></YouTube_Banner>
      )

    case "contentBody":
      return (
        <Content_Body
          key={section._key}
          portableText={section.contents}
        ></Content_Body>
      )

    case "textWithPhoto":
      return (
        <Text_with_Photo
          key={section._key}
          content={section.content}
          image={section.image}
          altText={section.altText}
        ></Text_with_Photo>
      )

    case "spotifyAlbum":
      return (
        <Spotify_Album
          key={section._key}
          albumCover={section.albumCover}
          altText={section.altText}
          albumID={section.albumID}
        ></Spotify_Album>
      )

    case "albumHeroBanner":
      return (
        <Album_Hero_Banner
          key={section._key}
          albumTitle={section.albumTitle}
          shortTitle={section.shortTitle}
          albumCover={section.albumCover}
          altText={section.altText}
          description={section.description}
          imageDesktop={section.imageDesktop}
          imageMobile={section.imageMobile}
        ></Album_Hero_Banner>
      )

    default:
      break
  }
}

export default function sectionsRender(sections: Array<Sections>) {
  let renderedSections: Array<React.ReactNode> = []

  for (const section of sections) {
    renderedSections.push(sectionRender(section))
  }

  return renderedSections
}
