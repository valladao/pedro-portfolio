import client from "../client"

export default async function getSheetMusic() {
  return client.fetch<Array<Sheet_Music>>(
    `*[_type == "sheetMusic"] | order(_createdAt asc){
      _id,
      title,
      altText,
      thumbnail,
      pdf{asset->{url}}
    }`
  )
}
