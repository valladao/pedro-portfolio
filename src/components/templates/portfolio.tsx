
import Title_Bar from "../sections/title-bar"
import sectionsRender from "../../scripts/sectionsRender"

type Portfolio_Template_Props = {
  data: Portfolio_Pages_Props
}

const Portfolio_Template = ({data}: Portfolio_Template_Props) => {

  // Special rules to move certain general album informations to sections
  for (let index = 0; index < data.sections.length; index++) {
    if (data.sections[index]._type === "spotifyAlbum" && data.sections[index].hasCover === true) {
      data.sections[index].albumCover = data.album.albumCover
      data.sections[index].altText = data.album.altText
    }
    if (data.sections[index]._type === "albumHeroBanner") {
      data.sections[index].albumTitle = data.album.albumTitle
      data.sections[index].shortTitle = data.album.shortTitle
      data.sections[index].albumCover = data.album.albumCover
      data.sections[index].altText = data.album.altText
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