import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schemas/schema"

export default defineConfig({
  name: "default",
  title: "Pedro H. Valladao | Portfolio",
  projectId: "xq90hv4m",
  dataset: "production",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes
  }
})
