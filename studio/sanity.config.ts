import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schemas/schema"

export default defineConfig({
  name: "default",
  title: "Pedro H. Valladao | Portfolio",
  projectId: "xq90hv4m",
  dataset: "production",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.documentTypeListItem("basePage").title("Base Pages"),
            S.documentTypeListItem("portfolioPage").title("Portfolio Pages"),
            S.documentTypeListItem("album").title("Albums"),
            S.documentTypeListItem("project").title("Projects"),
            S.documentTypeListItem("sheetMusic").title("Music Scores"),
            S.divider(),
            S.listItem()
              .title("Music Score Archive")
              .child(
                S.document()
                  .schemaType("sheetMusicArchive")
                  .documentId("sheetMusicArchive")
              )
          ])
    }),
    visionTool()
  ],
  schema: {
    types: schemaTypes
  }
})
