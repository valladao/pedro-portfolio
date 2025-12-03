
import Title_Bar from "../sections/title-bar"
import sectionsRender from "../../scripts/sectionsRender"

type Portfolio_Template_Props = {
  data: Portfolio_Pages_Props
}

const Portfolio_Template = ({data}: Portfolio_Template_Props) => {

  const item = data.item || data.album
  const albumData = item && "albumTitle" in item ? (item as Album) : undefined

  // Special rules to move certain general album informations to sections
  for (const section of data.sections) {
    if (albumData && section._type === "spotifyAlbum" && section.hasCover === true) {
      section.albumCover = albumData.albumCover
      section.altText = albumData.altText
    }
    if (albumData && section._type === "albumHeroBanner") {
      section.albumTitle = albumData.albumTitle
      section.shortTitle = albumData.shortTitle
      section.albumCover = albumData.albumCover
      section.altText = albumData.altText
    }
  }

  return (
    <>
      <Title_Bar pageTitle="Portfolio"></Title_Bar>
      {sectionsRender(data.sections).map(
        (component) => {return component}
      )}
    </>
  )
}

export default Portfolio_Template
