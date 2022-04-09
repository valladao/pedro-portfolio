import Basic_Layout from "../components/layouts/basic"
import Base_Template from "../components/templates/base"
import getBasePagesQuery from "../scripts/get-base-pages-query"

type About_Props = {
  query: Base_Pages_Props
}

const About = ({ query }: About_Props) => {
  return (
    <Basic_Layout>
      <Base_Template data={query} slug="about"></Base_Template>
    </Basic_Layout>
  );
};

export async function getServerSideProps() {

  const query = await getBasePagesQuery("about")

  return {
    props: {
      query
    }
  }
}

export default About