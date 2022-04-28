
import Title_Bar from "../sections/title-bar"
import sectionsRender from "../../scripts/sectionsRender"
import Album_List from "../sections/album-list"

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
      <Album_List></Album_List>
    </>
  )
}

export default Portfolio_Template