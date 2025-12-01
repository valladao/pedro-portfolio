import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@sanity/client'

const sanityClient = createClient({
  projectId: 'xq90hv4m',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({message: 'Method not allowed'})
  }

  if (!process.env.REVALIDATE_SECRET) {
    return res
      .status(500)
      .json({message: 'Missing REVALIDATE_SECRET environment variable'})
  }

  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({message: 'Invalid token'})
  }

  try {
    const paths = await collectPaths()
    const revalidated: string[] = []

    for (const path of paths) {
      await res.revalidate(path)
      revalidated.push(path)
    }

    return res.json({revalidated})
  } catch (err) {
    console.error('Revalidation error', err)
    return res.status(500).json({message: 'Error revalidating'})
  }
}

async function collectPaths() {
  const paths = new Set<string>()

  const basePages = await sanityClient.fetch<{slug?: string}[]>(
    `*[_type == "basePage"]{'slug': slug.current}`
  )

  basePages.forEach(({slug}) => {
    if (!slug) return
    paths.add(slug === 'index' ? '/' : `/${slug}`)
  })

  const portfolioPages = await sanityClient.fetch<
    {slug?: string; albumSlug?: string}[]
  >(
    `*[_type == "portfolioPage"]{
      'slug': slug.current,
      'albumSlug': album->slug.current
    }`
  )

  portfolioPages.forEach(({slug, albumSlug}) => {
    if (albumSlug) {
      paths.add(`/album/${albumSlug}`)
      return
    }

    if (slug) {
      paths.add(`/${slug}`)
    }
  })

  return paths
}
