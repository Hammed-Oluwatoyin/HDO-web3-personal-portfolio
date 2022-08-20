import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "zonc50w5",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    " skZUH2a6DpvhlAR2gvltzRn6v5lgVZQUTvSIKlptCn0WwLOp18oNsLLHo5aFHU7wZDEZMzYVzf8Z7s3ltjxBFMq29etzX9JhSzz23G2z2CCv2y8iZsvRoUKSJXq8j0cmMDzPwMfRBngeO0Q7D9hMPwwCAAPTifYKeZoOppjURGhBBuB4THIu",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
