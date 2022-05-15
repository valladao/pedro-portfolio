import client from "../client"

export default async function getSanityPagesQuery(
  filters: string,
  projections: string
) {
  const query = await client.fetch(`${filters}${projections}`)

  return query[0]
}
