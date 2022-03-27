import client from "../client";
import imageUrlBuilder from "@sanity/image-url";

export default function buildImageUrl(source: Sanity_Image) {
  return imageUrlBuilder(client).image(source).url();
}
