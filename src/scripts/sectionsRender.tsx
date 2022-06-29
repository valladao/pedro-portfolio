import Hero_Image from "../components/sections/hero-image"
import Album_Banner from "../components/sections/album-banner"
import Track_List from "../components/sections/track-list"
import Album_List from "../components/sections/album-list"
import YouTube_Banner from "../components/sections/youtube-banner"
import Content_Body from "../components/sections/content-body"

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
