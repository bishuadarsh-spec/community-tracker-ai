// No imports. Pure browser-safe code.
// export function getAssetUrl(assetId: string, includes: any) {
//   const asset = includes?.Asset?.find((a: any) => a.sys?.id === assetId);
//   const url = asset?.fields?.file?.url;
//   return url ? (url.startsWith("//") ? "https:" + url : url) : null;
// }

// lib/contentfulUtils.ts
export function getAssetUrl(assetId: string, includes: any): string {
  if (!assetId || !includes?.Asset) return '/placeholder-image.jpg';
  
  const asset = includes.Asset.find((a: any) => a.sys.id === assetId);
  return asset ? `https:${asset.fields.file.url}` : '/placeholder-image.jpg';
}

export const CONTENTFUL_CONFIG = {
  spaceId: '8b43d42ihhrk',
  accessToken: 'C6prQP8B0GCU9ghczGE612d5cWdBOHOJBxrsNsT5xFw',
  contentType: 'blogPost'
};

export function getContentfulUrl(query: string = '') {
  return `https://cdn.contentful.com/spaces/${CONTENTFUL_CONFIG.spaceId}/environments/master/entries?access_token=${CONTENTFUL_CONFIG.accessToken}&content_type=${CONTENTFUL_CONFIG.contentType}${query}`;
}