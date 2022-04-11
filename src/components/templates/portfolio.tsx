
import Title_Bar from "../sections/title-bar"
import sectionsRender from "../../scripts/sectionsRender"
import Album_Banner from "../sections/album-banner"

type Portfolio_Template_Props = {
  data: Portfolio_Pages_Props
}

const Portfolio_Template = ({ data }: Portfolio_Template_Props) => {
  return (
    <>
      <Title_Bar pageTitle="Portfolio"></Title_Bar>
      {sectionsRender(data.sections).map(
        (component) => { return component }
      )}
      <Album_Banner></Album_Banner>
    </>
  )
}

export default Portfolio_Template