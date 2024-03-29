import Basic_Layout from "../components/layouts/basic"
import Portfolio_Template from "../components/templates/portfolio"
import getSanityPagesQuery from "../scripts/get-sanity-pages-query"

type Portfolio_Props = {
  query: Portfolio_Pages_Props
}

const Portfolio = ({ query }: Portfolio_Props) => {
  return (
    <Basic_Layout page="portfolio">
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
      album != NULL => { album ->},
      selectedAlbuns[0] == "all" => { "albunsList": * [_type == "album"] | order(releaseDate desc) | order(_createdAt asc) }
    }
  }`

  const query = await getSanityPagesQuery(filters, projections)

  return {
    props: {
      query
    },
    revalidate: 10, // In seconds
  }
}

export default Portfolio