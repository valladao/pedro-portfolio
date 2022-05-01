import type { NextPage } from 'next'
import Basic_Layout from '../components/layouts/basic'
import Base_Template from "../components/templates/base"
import getSanityPagesQuery from '../scripts/get-sanity-pages-query'

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

  const fields = `{slug,pageTitle,imageDesktop,imageMobile,altText,email,contents}`

  const query = await getSanityPagesQuery("base", "contact", fields)

  return {
    props: {
      query
    }
  }
}

export default Contact