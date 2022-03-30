import type { NextPage } from 'next'
import Basic_Layout from '../components/layouts/basic'
import Base_Template from '../components/templates/base'
import getBasePagesQuery from '../scripts/get-base-pages-query'

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

  const query = await getBasePagesQuery("index")

  return {
    props: {
      query
    }
  }
}

export default Home
