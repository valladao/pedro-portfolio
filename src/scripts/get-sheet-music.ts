import client from "../client"

export default async function getSheetMusic() {
  const archive = await client.fetch<{ scores?: Array<Sheet_Music> } | null>(
    `*[_type == "sheetMusicArchive"][0]{
      scores[]->{
        _id,
        title,
        altText,
        thumbnail,
        pdf{asset->{url}}
      }
    }`
  )

  return archive?.scores || []
}
