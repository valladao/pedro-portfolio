import client from "../client"

export default async function getSanityPagesQuery(
  template: string,
  slug: string,
  fields: string
) {
  const query = await client.fetch(
    `*[_type == "${template}Page" && slug.current == "${slug}"]${fields}`
  )
  return query[0]
}
