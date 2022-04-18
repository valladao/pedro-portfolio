import Hero_Image from "../components/sections/hero-image"
import Album_Banner from "../components/sections/album-banner"

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
          slug={section.album.slug}
        ></Album_Banner>
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
