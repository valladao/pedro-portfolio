import Basic_Layout from "../../components/layouts/basic"
import Portfolio_Template from "../../components/templates/portfolio"
import getSanityPagesQuery from "../../scripts/get-sanity-pages-query"

type Album_Props = {
  query: Portfolio_Pages_Props
}

const Album = ({ query }: Album_Props) => {
  return (
    <Basic_Layout>
      <Portfolio_Template data={query}></Portfolio_Template>
    </Basic_Layout>
  )
}

export async function getServerSideProps() {

  const filters = `*[_type == "portfolioPage" && album->slug.current=="under-streetlight"]`

  const projections = `{...,album ->}`

  const query = await getSanityPagesQuery(filters, projections)

  return {
    props: {
      query
    }
  }
}

export default Album