import Basic_Layout from "../../components/layouts/basic"
import Portfolio_Template from "../../components/templates/portfolio"
import getSanityPagesQuery from "../../scripts/get-sanity-pages-query"
import client from "../../client"

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

export async function getStaticPaths() {

  const groqQuery = `*[_type == "portfolioPage"]{...,album ->}[].album.slug.current`

  const results = await client.fetch(groqQuery)

  const items = results.filter((result: string | null) => {
    return result !== null
  })

  const paths = items.map((item: string) => {
    if (item) return { params: { slug: item } }
  })

  return { paths, fallback: false }

}

export async function getStaticProps({ params }: Paths_Params) {

  const filters = `*[_type == "portfolioPage" && album->slug.current=="${params.slug}"]`

  const projections = `{...,album ->}`

  const query = await getSanityPagesQuery(filters, projections)

  return {
    props: {
      query
    }
  }
}

export default Album