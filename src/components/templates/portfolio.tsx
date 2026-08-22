
import Title_Bar from "../sections/title-bar"
import sectionsRender from "../../scripts/sectionsRender"

type Portfolio_Template_Props = {
  data: Portfolio_Pages_Props
}

const Portfolio_Template = ({data}: Portfolio_Template_Props) => {

  const item = data.item || data.album
  const albumData = item && "albumTitle" in item ? (item as Album) : undefined

  // Special rules to move certain general album information to sections
  const sections = data.sections.map((section): Sections => {
    if (albumData && section._type === "spotifyAlbum" && section.hasCover === true) {
      return {
        ...section,
        albumCover: albumData.albumCover,
        altText: albumData.altText
      }
    }
    if (albumData && section._type === "albumHeroBanner") {
      return {
        ...section,
        albumTitle: albumData.albumTitle,
        shortTitle: albumData.shortTitle,
        albumCover: albumData.albumCover,
        altText: albumData.altText
      }
    }
    return section
  })

  return (
    <>
      <Title_Bar pageTitle="Portfolio"></Title_Bar>
      {sectionsRender(sections).map(
        (component) => {return component}
      )}
    </>
  )
}

export default Portfolio_Template
