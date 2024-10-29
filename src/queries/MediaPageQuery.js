import { gql } from '@apollo/client';
export const MediaPageQuery = gql`
  query MediaPage($first: Int!, $after: String, $before: String) {
  posts(first: $first, after: $after, before: $before) {
    pageInfo{
      total
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    nodes{
      id
      title
      slug
      date
      excerpt
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
    }
  }
} 
`;

export const TotalMedia = gql`
  query Mediatotal{
 	posts{
    pageInfo{
      total
    }
  }
} 
`;