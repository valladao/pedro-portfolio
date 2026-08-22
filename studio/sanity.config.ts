import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schemas/schema"

export default defineConfig({
  name: "default",
  title: "Pedro H. Valladao | Portfolio",
  projectId: "xq90hv4m",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes
  }
})
