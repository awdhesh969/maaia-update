import { gql } from '@apollo/client';
export const MediaDetailPageQuery = gql`
  query MediaDetails($id: ID!) {
  post(id: $id,  idType: SLUG) {
   seo{
    title
    metaDesc
  }
    title
    excerpt
    date
    categories{
      nodes{
        name
      }
    }
    featuredImage{
      node{
        mediaItemUrl
      }
    }
    content
  }
}
`;