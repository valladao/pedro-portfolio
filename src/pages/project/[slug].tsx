import Basic_Layout from "../../components/layouts/basic"
import Portfolio_Template from "../../components/templates/portfolio"
import getSanityPagesQuery from "../../scripts/get-sanity-pages-query"
import client from "../../client"

type Project_Props = {
  query: Portfolio_Pages_Props
}

const Project = ({ query }: Project_Props) => {
  const pageTitle = query.item?.shortTitle || query.album?.shortTitle || "Project"

  return (
    <Basic_Layout page="project" pageTitle={pageTitle}>
      <Portfolio_Template data={query}></Portfolio_Template>
    </Basic_Layout>
  )
}

export async function getStaticPaths() {
  const groqQuery = `*[_type == "portfolioPage" && album->_type == "project"]{...,album ->}[].album.slug.current`

  const results = await client.fetch(groqQuery)

  const items = results.filter((result: string | null) => {
    return result !== null
  })

  const paths = items.map((item: string) => {
    if (item) return { params: { slug: item } }
  })

  return { paths, fallback: "blocking" }
}

export async function getStaticProps({ params }: Paths_Params) {
  const filters = `*[_type == "portfolioPage" && album->_type == "project" && album->slug.current=="${params.slug}"]`

  const projections = `
  {
    ...,
    album ->,
    "item": album->,
    sections[]{
      ...,
      _type == "photoSlides" => {
        ...,
        sectionHeight,
        sectionHeightMobile,
        slides[]{
          image,
          altText
        }
      },
      album != NULL => { album ->},
      _type == "itemGroup" => {
        "itemGroups": [
          {
            _key,
            title,
            showDescription,
            items[]->{
              ...,
              'slug': slug,
              albumCover,
              albumTitle,
              projectCover,
              projectTitle,
              shortTitle,
              altText,
              releaseDate,
              description
            }
          }
        ]
      }
    }
  }`

  const query = await getSanityPagesQuery(filters, projections)

  return {
    props: {
      query
    },
    revalidate: 10 // In seconds
  }
}

export default Project
