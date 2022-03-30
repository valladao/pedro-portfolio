import type { NextPage } from 'next'
import Basic_Layout from '../components/layouts/basic'
import Base_Template from "../components/templates/base"
import getBasePagesQuery from "../scripts/get-base-pages-query"

type Contact_Props = {
  query: Base_Pages_Props
}

const Contact: NextPage<Contact_Props> = ({ query }) => {
  return (
    <Basic_Layout>
      <Base_Template slug="contact" data={query}></Base_Template>
    </Basic_Layout>
  )
}

export async function getServerSideProps() {

  const query = await getBasePagesQuery("contact")

  return {
    props: {
      query
    }
  }
}

export default Contact