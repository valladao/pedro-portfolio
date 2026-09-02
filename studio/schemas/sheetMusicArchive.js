export default {
  title: "Settings | Music Score Archive",
  name: "sheetMusicArchive",
  type: "document",
  fields: [
    {
      title: "Scores",
      name: "scores",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "sheetMusic" }],
          options: { disableNew: true }
        }
      ],
      validation: (Rule) => Rule.unique()
    }
  ],
  preview: {
    prepare() {
      return { title: "Music Score Archive" }
    }
  }
}
