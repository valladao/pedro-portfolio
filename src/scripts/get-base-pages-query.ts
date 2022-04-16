import client from "../client"

export default async function getBasePagesQuery(slug: string) {
  const query = await client.fetch(
    `*[_type == "basePage" && slug == "${slug}"]{slug,pageTitle,imageDesktop,imageMobile,altText,email,contents}`
  )
  return query[0]
}
