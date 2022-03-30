import client from "../client"

export default async function getBasePagesQuery(slug: string) {
  const query = await client.fetch(
    `*[_type == "base-pages" && slug == "${slug}"]{slug,pageTitle,imageDesktop,imageMobile,altText,email}`
  )
  return query[0]
}
