export const METADATA_FRAGMENT = `
  fragment MetadataFields on PostTypeSEO {
    title
    metaDesc
    canonical
    opengraphTitle
    opengraphDescription
    opengraphImage {
      mediaItemUrl
    }
    twitterTitle
    twitterDescription
    twitterImage {
      mediaItemUrl
    }
    breadcrumbs {
      text
      url
    }
  }
`;
