
import Title_Bar from "../sections/title-bar"
import sectionsRender from "../../scripts/sectionsRender"

type Portfolio_Template_Props = {
  data: Portfolio_Pages_Props
}

const Portfolio_Template = ({data}: Portfolio_Template_Props) => {

  const item = data.item || data.album
  const albumData = item && "albumTitle" in item ? (item as Album) : undefined

  // Special rules to move certain general album informations to sections
  for (let index = 0; index < data.sections.length; index++) {
    if (
      albumData &&
      data.sections[index]._type === "spotifyAlbum" &&
      data.sections[index].hasCover === true
    ) {
      data.sections[index].albumCover = albumData.albumCover
      data.sections[index].altText = albumData.altText
    }
    if (albumData && data.sections[index]._type === "albumHeroBanner") {
      data.sections[index].albumTitle = albumData.albumTitle
      data.sections[index].shortTitle = albumData.shortTitle
      data.sections[index].albumCover = albumData.albumCover
      data.sections[index].altText = albumData.altText
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
