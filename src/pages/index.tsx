import type { NextPage } from 'next'
import Basic_Layout from '../components/layouts/basic'
import Base_Template from '../components/templates/base'
import getSanityPagesQuery from '../scripts/get-sanity-pages-query'

type Home_Props = {
  query: Base_Pages_Props
}

const Home: NextPage<Home_Props> = ({ query }) => {

  return (
    <Basic_Layout>
      <Base_Template data={query} />
    </Basic_Layout>

  )
}

export async function getServerSideProps() {

  const fields = `{'slug': slug.current,pageTitle,imageDesktop,imageMobile,altText,email,contents}`

  const query = await getSanityPagesQuery("base", "index", fields)

  return {
    props: {
      query
    }
  }
}

export default Home
