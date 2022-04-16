import Title_Bar from "../sections/title-bar"
import Email_Bar from "../sections/email-bar"
import Hero_Image from "../sections/hero-image"
import Name_Bar from "../sections/name-bar"
import Preheading_Bar from "../sections/preheading-bar"
import Content_Bar from "../sections/content-bar"
import Content_Body from "../sections/content-body"
import Social_Box from "../sections/social-box"

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
      break
    case "contact":
      return (
        <>
          <Hero_Image imageDesktop={data.imageDesktop} imageMobile={data.imageMobile} altText={data.altText}></Hero_Image>
          <Email_Bar email={data.email}></Email_Bar>
        </>
      )
      break
    case "about":
      return (
        <>
          <Title_Bar pageTitle={data.pageTitle}></Title_Bar>
          <Hero_Image imageDesktop={data.imageDesktop} imageMobile={data.imageMobile} altText={data.altText}></Hero_Image>
          <Name_Bar></Name_Bar>
          <Preheading_Bar></Preheading_Bar>
          <Content_Bar></Content_Bar>
          <Content_Body portableText={data.contents}></Content_Body>
          <Social_Box></Social_Box>
        </>
      )
      break
    default:
      return (
        // This must be a 404 return component
        <></>
      )
      break
  }

}

export default Base_Template