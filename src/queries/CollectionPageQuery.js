import { gql } from '@apollo/client';
export const CollectionPageQuery = gql`
 query CollectionPage {
  page(id: "the-collection", idType: URI) {
    seo {
      title
      metaDesc
    }
    title
    featuredImage {
      node {
        mediaItemUrl
      }
    }
  }
  collections {
    nodes {
      id
      title
      slug
      excerpt
      collectionField {
        launchingSoon
        collectionLocation
        launchingSoonText
      }
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
}
`;