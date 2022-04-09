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

type Base_Pages_Props = {
  imageDesktop: Sanity_Image
  imageMobile: Sanity_Image
  pageTitle: string
  slug: string
  altText: string
  email: string
  content: Array<Block>
}
