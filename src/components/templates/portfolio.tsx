
import Title_Bar from "../sections/title-bar"
import Hero_Image from "../sections/hero-image"

type Portfolio_Template_Props = {
  data: Portfolio_Pages_Props
}

const Portfolio_Template = ({ data }: Portfolio_Template_Props) => {
  return (
    <>
      <Title_Bar pageTitle="Portfolio"></Title_Bar>
      <Hero_Image imageDesktop={data.sections[0].imageDesktop} imageMobile={data.sections[0].imageMobile} altText={data.sections[0].altText}></Hero_Image>
    </>
  )
}

export default Portfolio_Template