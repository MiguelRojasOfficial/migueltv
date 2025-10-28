import { createClient } from "contentful";

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful environment variables missing. Please check your .env.local file for CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN."
  );
}

export const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
});