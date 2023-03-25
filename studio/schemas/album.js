// Album Document
export default {
  title: "Database | Albuns",
  name: "album",
  type: "document",
  fields: [
    {
      title: "Album Title",
      name: "albumTitle",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      title: "Short Title",
      name: "shortTitle",
      type: "string",
      validation: (Rule) => Rule.required()
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
      },
      validation: (Rule) => Rule.required()
    },
    {
      title: "Release Date",
      name: "releaseDate",
      type: "number",
      validation: (Rule) => Rule.required()
    },
    {
      title: "Album Cover",
      name: "albumCover",
      type: "image",
      description:
        "Image should be 665x665 pixels in WebP format. Use https://squoosh.app/",
      validation: (Rule) => Rule.required()
    },
    {
      title: "Album Cover ALT Text",
      name: "altText",
      type: "string",
      validation: (Rule) => Rule.required()
    }
  ]
}
