import Title_Bar from "../sections/title-bar"
import Email_Bar from "../sections/email-bar"
import Hero_Image from "../sections/hero-image"
import Name_Bar from "../sections/name-bar"
import Preheading_Bar from "../sections/preheading-bar"

type Base_Template_Props = {
  data: Base_Pages_Props
  slug?: string
}

const Base_Template = ({ data, slug = "index" }: Base_Template_Props) => {

  switch (slug) {
    case "index":
      return (
        <Hero_Image imageDesktop={data.imageDesktop} imageMobile={data.imageMobile} altText={data.altText}></Hero_Image>
      )
      break;
    case "contact":
      return (
        <>
          <Hero_Image imageDesktop={data.imageDesktop} imageMobile={data.imageMobile} altText={data.altText}></Hero_Image>
          <Email_Bar email={data.email}></Email_Bar>
        </>
      )
      break;
    case "about":
      return (
        <>
          <Title_Bar pageTitle={data.pageTitle}></Title_Bar>
          <Hero_Image imageDesktop={data.imageDesktop} imageMobile={data.imageMobile} altText={data.altText}></Hero_Image>
          <Name_Bar></Name_Bar>
          <Preheading_Bar></Preheading_Bar>
        </>
      )
      break;
    default:
      return (
        // This must be a 404 return component
        <></>
      )
      break;
  }

}

export default Base_Template