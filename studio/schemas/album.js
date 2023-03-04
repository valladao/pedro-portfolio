// Album Document
export default {
  title: "Database | Albuns",
  name: "album",
  type: "document",
  fields: [
    {
      title: "Album Title",
      name: "albumTitle",
      type: "string"
    },
    {
      title: "Short Title",
      name: "shortTitle",
      type: "string"
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "shortTitle",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200)
      }
    },
    {
      title: "Release Date",
      name: "releaseDate",
      type: "number"
    },
    {
      title: "Album Cover",
      name: "albumCover",
      type: "image"
    },
    {
      title: "Album Cover ALT Text",
      name: "altText",
      type: "string"
    }
  ]
}
