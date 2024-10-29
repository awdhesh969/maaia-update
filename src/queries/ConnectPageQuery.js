import { gql } from '@apollo/client';
export const ConnectPageQuery = gql`
  query ContactPage {
  page(id: "connect", idType: URI) {
    seo {
      title
      metaDesc
    }
    title
    date
    featuredImage {
      node {
        mediaItemUrl
      }
    }
    contactPage {
      contactHeadingText
      contactAboutLongText
      contactNumber
      contactEmail
      contactHeadOffice
      contactOfficeHours
      socialMediaIcons{
        socialMediaIcon{
          node{
            mediaItemUrl
          }
        }
        socialMediaUrl
      }
    }
  }
}

`;