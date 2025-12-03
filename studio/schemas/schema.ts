import album from "./album"
import project from "./project"
import * as objects from "./objects"
import * as sections from "./sections"

export const schemaTypes = [
  // Objects
  objects.soundcloudTrack,
  objects.spotifyTrack,
  objects.youtubeTrack,

  // Sections
  sections.heroImage,
  sections.albumBanner,
  sections.trackList,
  sections.itemGroup,
  sections.youtubeVideo,
  sections.contentBody,
  sections.textWithPhoto,
  sections.spotifyAlbum,
  sections.albumHeroBanner,
  sections.photoSlides,

  // Documents
  {
    title: "Pages | Portfolio Template",
    name: "portfolioPage",
    type: "document",
    fields: [
      {
        title: "Album or Project (Only for detail page)",
        name: "album",
        type: "reference",
        to: [{ type: "album" }, { type: "project" }],
        description: "Don't use in portfolio page: only for album/project page."
      },
      {
        title: "Page Title (Only for Portfolio page)",
        name: "pageTitle",
        type: "string",
        description:
          "The oposite: only for portfolio page - don't use in album/project page."
      },
      {
        title: "Slug (Only for Portfolio page)",
        name: "slug",
        type: "slug",
        options: {
          source: "pageTitle",
          maxLength: 200,
          slugify: (input: string) =>
            input.toLowerCase().replace(/\s+/g, "-").slice(0, 200)
        },
        description: "Only for portfolio page - don't use in album/project page."
      },
      {
        title: "Sections",
        name: "sections",
        type: "array",
        of: [
          { type: "heroImage" },
          { type: "albumBanner" },
          { type: "trackList" },
          { type: "itemGroup" },
          { type: "youtubeVideo" },
          { type: "contentBody" },
          { type: "textWithPhoto" },
          { type: "spotifyAlbum" },
          { type: "albumHeroBanner" },
          { type: "photoSlides" }
        ]
      }
    ],
    preview: {
      select: {
        albumTitle: "album.albumTitle",
        projectTitle: "album.projectTitle"
      },
      prepare({
        albumTitle,
        projectTitle
      }: {
        albumTitle?: string
        projectTitle?: string
      }) {
        const title = albumTitle || projectTitle || "Portfolio"
        return {
          title: title
        }
      }
    }
  },
  {
    title: "Pages | Base Template",
    name: "basePage",
    type: "document",
    fields: [
      {
        title: "Page Title",
        name: "pageTitle",
        type: "string",
        validation: (Rule: any) => Rule.required()
      },
      {
        title: "Slug",
        name: "slug",
        type: "slug",
        options: {
          source: "pageTitle",
          maxLength: 200,
          slugify: (input: string) =>
            input.toLowerCase().replace(/\s+/g, "-").slice(0, 200)
        },
        validation: (Rule: any) => Rule.required()
      },
      {
        title: "Hero Image | Desktop",
        name: "imageDesktop",
        type: "image",
        description:
          "Image should be 1920x768 pixels in WebP format. Use https://squoosh.app/",
        validation: (Rule: any) => Rule.required()
      },
      {
        title: "Hero Image | Mobile",
        name: "imageMobile",
        type: "image",
        description:
          "Image should be 640x800 pixels in WebP format. Use https://squoosh.app/",
        validation: (Rule: any) => Rule.required()
      },
      {
        title: "Image ALT Text",
        name: "altText",
        type: "string",
        description:
          "Used by Google Search. Use one text that better describe the image and the page that the image is used.",
        validation: (Rule: any) => Rule.required()
      },
      {
        title: "Contact E-mail (optional)",
        name: "email",
        type: "string"
      },
      {
        title: "Content (optional)",
        type: "array",
        name: "contents",
        of: [{ type: "block" }]
      }
    ]
  },
  album,
  project
]
