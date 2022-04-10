import Basic_Layout from "../components/layouts/basic"
import Portfolio_Template from "../components/templates/portfolio"
import getSanityPagesQuery from "../scripts/get-sanity-pages-query"

type Portfolio_Props = {
  query: Portfolio_Pages_Props
}

const Portfolio = ({ query }: Portfolio_Props) => {
  return (
    <Basic_Layout>
      <Portfolio_Template data={query}></Portfolio_Template>
    </Basic_Layout>
  )
}

export async function getServerSideProps() {

  const query = await getSanityPagesQuery("portfolio", "portfolio")

  return {
    props: {
      query
    }
  }
}

export default Portfolio