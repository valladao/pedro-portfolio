// This file contains global types statements

// Next.js Types
type Paths_Params = {
  params: {
    slug: string
  }
}

// Types for data got from api Sanity.io

type Sanity_Image = {
  _type: string
  asset: {
    _ref: string
    _type: string
  }
}

type Children = {
  _key: string
  _type: string
  marks: Array<string>
  text: string
}

type markDefs = {
  _type: string
  _key: string
  href: string
}

type Block = {
  _key: string
  _type: string
  children: Array<Children>
  markDefs: Array<markDefs>
  style: string
}

type Slug = {
  _type: string
  current: string
}

type Album = {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  albumCover: Sanity_Image
  albumTitle: string
  shortTitle: string
  altText: string
  slug: Slug
  releaseDate: number
}

type Project = {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  projectCover: Sanity_Image
  projectTitle: string
  shortTitle: string
  altText: string
  slug: Slug
  releaseDate: number
  description: string
}

type Item = Album | Project

type Base_Pages_Props = {
  imageDesktop: Sanity_Image
  imageMobile: Sanity_Image
  pageTitle: string
  slug: string
  altText: string
  email: string
  contents: Array<Block>
}

type HeroImage = {
  _key: string
  _type: "heroImage"
  altText: string
  imageDesktop: Sanity_Image
  imageMobile: Sanity_Image
}

type AlbumBanner = {
  _key: string
  _type: "albumBanner"
  album: Album
}

type Standard_Track = {
  _key: string
  _type: string
  trackID: string
}

type YouTube_Track = {
  _key: string
  _type: string
  trackID: string
  startTime: number
}

type Track_List = {
  _key: string
  _type: "trackList"
  tracks: Array<Tracks>
}

type Item_Group = {
  _key: string
  title?: string
  items: Array<Item>
  showDescription?: boolean
  _type?: string
}

type Item_Group_Section = {
  _key: string
  _type: "itemGroup"
  itemGroups: Array<Item_Group>
}

type Youtube_Video = {
  _key: string
  _type: "youtubeVideo"
  trackID: string
  startTime: number
  withTitle: string
}

type Content_Body = {
  _key: string
  _type: "contentBody"
  contents: Array<Block>
}

type Text_with_Photo = {
  _key: string
  _type: "textWithPhoto"
  content: Array<Block>
  image: Sanity_Image
  altText: string
}

type Spotify_Album = {
  _key: string
  _type: "spotifyAlbum"
  albumID: string
  hasCover: boolean
  altText: string
  albumCover: Sanity_Image
}

type Album_Hero_Banner = {
  _key: string
  _type: "albumHeroBanner"
  albumTitle: string
  shortTitle: string
  albumCover: Sanity_Image
  altText: string
  description: string
  imageDesktop: Sanity_Image
  imageMobile: Sanity_Image
}

type Photo_Slides = {
  _key: string
  _type: "photoSlides"
  sectionHeight: number
  sectionHeightMobile?: number
  slides: Array<{
    image: Sanity_Image
    altText: string
    _key?: string
  }>
}

type Sections =
  | HeroImage
  | AlbumBanner
  | Track_List
  | Item_Group_Section
  | Youtube_Video
  | Content_Body
  | Text_with_Photo
  | Spotify_Album
  | Album_Hero_Banner
  | Photo_Slides

type Tracks = Standard_Track & YouTube_Track

type Portfolio_Pages_Props = {
  pageTitle?: string
  sections: Array<Sections>
  slug?: string
  album?: Album
  item?: Item
}

// Other types (used multiple times)
type YouTube_Track_Props = {
  trackId: string
  startTime: number
}
