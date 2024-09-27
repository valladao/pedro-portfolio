// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"
import * as objects from "./objects"
import * as sections from "./sections"
import album from "./album"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Include objects to schema
    objects.soundcloudTrack,
    objects.spotifyTrack,
    objects.youtubeTrack,

    // Include sections to schema
    sections.heroImage,
    sections.albumBanner,
    sections.trackList,
    sections.albumList,
    sections.youtubeVideo,
    sections.contentBody,
    sections.textWithPhoto,
    sections.spotifyAlbum,
    sections.albumHeroBanner,
    sections.photoSlides,

    // Portfolio Page Template
    {
      title: "Pages | Portfolio Template",
      name: "portfolioPage",
      type: "document",
      fields: [
        {
          title: "Album (Only for Album page)",
          name: "album",
          type: "reference",
          to: [{ type: "album" }],
          description: "Don't use in portfolio page: only for album page."
        },
        {
          title: "Page Title (Only for Portfolio page)",
          name: "pageTitle",
          type: "string",
          description:
            "The oposite: only for portfolio page - don't use in album page."
        },
        {
          title: "Slug (Only for Portfolio page)",
          name: "slug",
          type: "slug",
          options: {
            source: "pageTitle",
            maxLength: 200,
            slugify: (input) =>
              input.toLowerCase().replace(/\s+/g, "-").slice(0, 200)
          },
          description: "Only for portfolio page - don't use in album page."
        },
        {
          title: "Sections",
          name: "sections",
          type: "array",
          of: [
            { type: "heroImage" },
            { type: "albumBanner" },
            { type: "trackList" },
            { type: "albumList" },
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
          albumTitle: "album.albumTitle"
        },
        prepare({ albumTitle }) {
          const title = albumTitle ? albumTitle : "Portfolio"
          return {
            title: title
          }
        }
      }
    },

    // Base Page Template
    {
      title: "Pages | Base Template",
      name: "basePage",
      type: "document",
      fields: [
        {
          title: "Page Title",
          name: "pageTitle",
          type: "string",
          validation: (Rule) => Rule.required()
        },
        {
          title: "Slug",
          name: "slug",
          type: "slug",
          options: {
            source: "pageTitle",
            maxLength: 200,
            slugify: (input) =>
              input.toLowerCase().replace(/\s+/g, "-").slice(0, 200)
          },
          validation: (Rule) => Rule.required()
        },
        {
          title: "Hero Image | Desktop",
          name: "imageDesktop",
          type: "image",
          description:
            "Image should be 1920x768 pixels in WebP format. Use https://squoosh.app/",
          validation: (Rule) => Rule.required()
        },
        {
          title: "Hero Image | Mobile",
          name: "imageMobile",
          type: "image",
          description:
            "Image should be 640x800 pixels in WebP format. Use https://squoosh.app/",
          validation: (Rule) => Rule.required()
        },
        {
          title: "Image ALT Text",
          name: "altText",
          type: "string",
          description:
            "Used by Google Search. Use one text that better describe the image and the page that the image is used.",
          validation: (Rule) => Rule.required()
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

    // Include Album Document
    album
  ])
})
