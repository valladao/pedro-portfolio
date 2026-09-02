import Basic_Layout from "../../components/layouts/basic"
import Portfolio_Template from "../../components/templates/portfolio"
import getSanityPagesQuery from "../../scripts/get-sanity-pages-query"
import client from "../../client"
import getSheetMusic from "../../scripts/get-sheet-music"

type Album_Props = {
  query: Portfolio_Pages_Props
}

const Album = ({query}: Album_Props) => {
  return (
    <Basic_Layout page="album" pageTitle={query.item?.shortTitle || query.album?.shortTitle} sheetMusic={query.sheetMusic}>
      <Portfolio_Template data={query}></Portfolio_Template>
    </Basic_Layout>
  )
}

export async function getStaticPaths() {

  const groqQuery = `*[_type == "portfolioPage" && album->_type == "album"]{...,album ->}[].album.slug.current`

  const results = await client.fetch(groqQuery)

  const items = results.filter((result: string | null) => {
    return result !== null
  })

  const paths = items.map((item: string) => {
    if (item) return {params: {slug: item}}
  })

  return {paths, fallback: 'blocking'}

}

export async function getStaticProps({params}: Paths_Params) {

  const filters = `*[_type == "portfolioPage" && album->_type == "album" && album->slug.current=="${params.slug}"]`

  const projections = `
  {
    ...,
    album ->,
    "item": album->,
    sections[]{
      ...,
      _type == "photoSlides" => {
        ...,
        sectionHeight,
        sectionHeightMobile,
        slides[]{
          image,
          altText
        }
      },
      album != NULL => { album ->},
      _type == "itemGroup" => {
        "itemGroups": [
          {
            _key,
            title,
            showDescription,
            items[]->{
              ...,
              'slug': slug,
              albumCover,
              albumTitle,
              projectCover,
              projectTitle,
              shortTitle,
              altText,
              releaseDate,
              description
            }
          }
        ]
      }
    }
  }`

  const [pageQuery, sheetMusic] = await Promise.all([
    getSanityPagesQuery(filters, projections),
    getSheetMusic()
  ])

  return {
    props: {
      query: { ...pageQuery, sheetMusic }
    },
    revalidate: 10, // In seconds
  }
}

export default Album
