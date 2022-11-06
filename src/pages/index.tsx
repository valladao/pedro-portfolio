import type { NextPage } from 'next'
import Basic_Layout from '../components/layouts/basic'
import Base_Template from '../components/templates/base'
import getSanityPagesQuery from '../scripts/get-sanity-pages-query'

type Home_Props = {
  query: Base_Pages_Props
}

const Home: NextPage<Home_Props> = ({ query }) => {

  return (
    <Basic_Layout page="home">
      <Base_Template data={query} />
    </Basic_Layout>

  )
}

export async function getStaticProps() {

  const filters = `*[_type == "basePage" && slug.current == "index"]`

  const projections = `{'slug': slug.current,pageTitle,imageDesktop,imageMobile,altText,email,contents}`

  const query = await getSanityPagesQuery(filters, projections)

  return {
    props: {
      query
    }
  }
}

export default Home
