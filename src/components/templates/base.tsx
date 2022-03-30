import Email_Bar from "../sections/email-bar"
import Hero_Image from "../sections/hero-image"

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
    default:
      return (
        // This must be a 404 return component
        <></>
      )
      break;
  }

}

export default Base_Template