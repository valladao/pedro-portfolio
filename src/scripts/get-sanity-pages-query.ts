import client from "../client"

export default async function getSanityPagesQuery(
  template: string,
  slug: string
) {
  let getFields = ""

  switch (template) {
    case "base":
      getFields =
        "{slug,pageTitle,imageDesktop,imageMobile,altText,email,content}"
      break
    case "portfolio":
      getFields = "{pageTitle,slug,sections}"
      break
    default:
      getFields = ""
      break
  }

  const query = await client.fetch(
    `*[_type == "${template}-pages" && slug == "${slug}"]${getFields}`
  )
  return query[0]
}
