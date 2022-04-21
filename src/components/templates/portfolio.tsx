
import Title_Bar from "../sections/title-bar"
import sectionsRender from "../../scripts/sectionsRender"
import Track_List from "../sections/track-list"

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
      <Track_List></Track_List>
    </>
  )
}

export default Portfolio_Template