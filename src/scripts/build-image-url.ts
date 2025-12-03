import client from "../client";
import imageUrlBuilder from "@sanity/image-url";

export default function buildImageUrl(source?: Sanity_Image | null) {
  if (!source) return "";
  const url = imageUrlBuilder(client).image(source).url();
  return url || "";
}
