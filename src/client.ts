import { createClient } from "@sanity/client" // Use named export

const client = createClient({
  projectId: "xq90hv4m", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  apiVersion: "2021-10-21",
  useCdn: true // `false` if you want to ensure fresh data
})

export default client
