import type { NextPage } from 'next'
import Basic_Layout from '../components/layouts/basic'
import Base_Template from "../components/templates/base"
import getSanityPagesQuery from '../scripts/get-sanity-pages-query'

type Contact_Props = {
  query: Base_Pages_Props
}

const Contact: NextPage<Contact_Props> = ({ query }) => {
  return (
    <Basic_Layout page="contact">
      <Base_Template slug="contact" data={query}></Base_Template>
    </Basic_Layout>
  )
}

export async function getStaticProps() {

  const filters = `*[_type == "basePage" && slug.current == "contact"]`

  const projections = `{'slug': slug.current,pageTitle,imageDesktop,imageMobile,altText,email,contents}`

  const query = await getSanityPagesQuery(filters, projections)

  return {
    props: {
      query
    },
    revalidate: 10, // In seconds
  }
}

export default Contact