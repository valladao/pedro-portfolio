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

type Album = {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  albumCover: Sanity_Image
  albumTitle: string
  altText: string
  slug: string
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

type Soundcloud_Track = {
  _key: string
  _type: string
  trackID: string
}

type Track_List = {
  _key: string
  _type: string
  tracks: Array<Soundcloud_Track>
}

type Sections = HeroImage & AlbumBanner & Track_List

type Portfolio_Pages_Props = {
  pageTitle: string
  sections: Array<Sections>
  slug: string
}
