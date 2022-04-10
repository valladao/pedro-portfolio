import Hero_Image from "../components/sections/hero-image"

const sectionRender = (section: heroImage) => {
  switch (section._type) {
    case "heroImage":
      return (
        <Hero_Image
          key={section._key}
          imageDesktop={section.imageDesktop}
          imageMobile={section.imageMobile}
          altText={section.altText}
        ></Hero_Image>
      )

    default:
      break
  }
}

export default function sectionsRender(sections: Array<heroImage>) {
  let renderedSections: Array<React.ReactNode> = []

  for (const section of sections) {
    renderedSections.push(sectionRender(section))
  }

  return renderedSections
}
