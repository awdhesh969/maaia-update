import { gql } from '@apollo/client';
export const HeaderQuery = gql`
  query HeaderQuery {
  siteLogo
  footer{
    footerField{
      copyrightText
    }
  }
  menuItems(where: {location: PRIMARY}) {
    edges {
      node {
        id
        label
        path
      }
    }
  }
}  
`;