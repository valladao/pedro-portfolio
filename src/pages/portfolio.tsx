import Basic_Layout from "../components/layouts/basic"
import Portfolio_Template from "../components/templates/portfolio"
import getSanityPagesQuery from "../scripts/get-sanity-pages-query"
import getSheetMusic from "../scripts/get-sheet-music"

type Portfolio_Props = {
  query: Portfolio_Pages_Props
}

const Portfolio = ({query}: Portfolio_Props) => {
  return (
    <Basic_Layout page="portfolio" pageTitle="Portfolio" sheetMusic={query.sheetMusic}>
      <Portfolio_Template data={query}></Portfolio_Template>
    </Basic_Layout>
  )
}

export async function getStaticProps() {

  const filters = `*[_type == "portfolioPage" && slug.current == "portfolio"]`

  const projections = `
  {
    pageTitle,
    'slug': slug.current,
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

export default Portfolio
