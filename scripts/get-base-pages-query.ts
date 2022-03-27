import client from '../client'

export default async function getServerSideProps(slug: string) {
  const query = await client.fetch(
    `*[_type == "base-pages" && slug == "${slug}"]{slug,pageTitle,imageDesktop,imageMobile}`
  )
  return query[0]

}