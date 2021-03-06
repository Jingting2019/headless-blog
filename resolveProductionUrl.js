const projectUrl = process.env.SANITY_STUDIO_PROJECT_URL;
const previewSecret = process.env.SANITY_STUDIO_PREVIEW_SECRET;

export default function resolveProductionUrl(document) {
  return `https://my-site.com/posts/${document.slug.current}`
}
