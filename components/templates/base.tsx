import Hero_Image from "../sections/hero-image"

type Base_Template_Props = {
  data: Base_Pages_Props
  slug?: string
}

const Base_Template = ({ data, slug = "index" }: Base_Template_Props) => {

  switch (slug) {
    case "index":
      return (
        <Hero_Image imageDesktop={data.imageDesktop} imageMobile={data.imageMobile} ></Hero_Image>
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