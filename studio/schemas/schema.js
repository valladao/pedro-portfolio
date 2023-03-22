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

    // Portfolio Page Template
    {
      title: "Pages | Portfolio Template",
      name: "portfolioPage",
      type: "document",
      fields: [
        {
          title: "Album",
          name: "album",
          type: "reference",
          to: [{ type: "album" }]
        },
        {
          title: "Page Title (only when Album is not set)",
          name: "pageTitle",
          type: "string"
        },
        {
          title: "Slug (only when Album is not set)",
          name: "slug",
          type: "slug",
          options: {
            source: "pageTitle",
            maxLength: 200,
            slugify: (input) =>
              input.toLowerCase().replace(/\s+/g, "-").slice(0, 200)
          }
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
            { type: "albumHeroBanner" }
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
          validation: (Rule) => Rule.required()
        },
        {
          title: "Hero Image | Mobile",
          name: "imageMobile",
          type: "image",
          validation: (Rule) => Rule.required()
        },
        {
          title: "Image ALT Text",
          name: "altText",
          type: "string",
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
