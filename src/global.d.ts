// This file contains global types statements

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
  altText: string
  slug: Slug
  releaseDate: number
}

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
  _type: string
  altText: string
  imageDesktop: Sanity_Image
  imageMobile: Sanity_Image
}

type AlbumBanner = {
  _key: string
  _type: string
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
  _type: string
  tracks: Array<Tracks>
}

type Album_List = {
  _key: string
  _type: string
  albunsList: Array<Album>
}

type Youtube_Video = {
  _key: string
  _type: string
  trackID: string
  startTime: number
  withTitle: string
}

type Sections = HeroImage &
  AlbumBanner &
  Track_List &
  Album_List &
  Youtube_Video

type Tracks = Standard_Track & YouTube_Track

type Portfolio_Pages_Props = {
  pageTitle: string
  sections: Array<Sections>
  slug: string
}

// Other types (used multiple times)
type YouTube_Track_Props = {
  trackId: string
  startTime: number
}
