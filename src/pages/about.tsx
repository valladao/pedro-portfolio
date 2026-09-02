import Basic_Layout from "../components/layouts/basic"
import Base_Template from "../components/templates/base"
import getSanityPagesQuery from '../scripts/get-sanity-pages-query'
import getSheetMusic from '../scripts/get-sheet-music'

type About_Props = {
  query: Base_Pages_Props
}

const About = ({query}: About_Props) => {
  return (
    <Basic_Layout page="about" pageTitle="About" sheetMusic={query.sheetMusic}>
      <Base_Template data={query} slug="about"></Base_Template>
    </Basic_Layout>
  );
};

export async function getStaticProps() {

  const filters = `*[_type == "basePage" && slug.current == "about"]`

  const projections = `{'slug': slug.current,pageTitle,imageDesktop,imageMobile,altText,email,contents}`

  const [pageQuery, sheetMusic] = await Promise.all([
    getSanityPagesQuery(filters, projections),
    getSheetMusic()
  ])

  return {
    props: {
      query: { ...pageQuery, sheetMusic }
    },
    revalidate: 10, // In seconds
  }
}

export default About
