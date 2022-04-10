
import Title_Bar from "../sections/title-bar"
import Hero_Image from "../sections/hero-image"

type Portfolio_Template_Props = {
  data: Portfolio_Pages_Props
}

const sectionRender = (section: heroImage) => {

  switch (section._type) {
    case "heroImage":
      return <Hero_Image key={section._key} imageDesktop={section.imageDesktop} imageMobile={section.imageMobile} altText={section.altText}></Hero_Image>

    default:
      break;
  }
}

const sectionLoop = (sections: Array<heroImage>) => {
  let renderedSections: Array<React.ReactNode> = []

  for (const section of sections) {
    renderedSections.push(sectionRender(section))
  }

  return renderedSections
}

const Portfolio_Template = ({ data }: Portfolio_Template_Props) => {
  return (
    <>
      <Title_Bar pageTitle="Portfolio"></Title_Bar>
      {sectionLoop(data.sections).map(
        (component) => { return component }
      )}
    </>
  )
}

export default Portfolio_Template