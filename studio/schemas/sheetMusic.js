export default {
  title: "Database | Music Scores",
  name: "sheetMusic",
  type: "document",
  fields: [
    { title: "Title", name: "title", type: "string", validation: (Rule) => Rule.required() },
    { title: "PDF File", name: "pdf", type: "file", options: { accept: "application/pdf" }, validation: (Rule) => Rule.required() },
    { title: "Thumbnail", name: "thumbnail", type: "image", validation: (Rule) => Rule.required() },
    { title: "Thumbnail ALT Text", name: "altText", type: "string", validation: (Rule) => Rule.required() }
  ],
  preview: { select: { title: "title", media: "thumbnail" } }
}
