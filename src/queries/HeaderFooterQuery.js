import { gql } from '@apollo/client';
export const HeaderFooterQuery = gql`
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
    footer {
    footerField {
      footerText
      footerLogo {
        node {
          mediaItemUrl
        }
      }
      footerTermsAndPrivacyLink {
        linkLabel
        linkUrl
      }
      copyrightText
      quickLinksHeading
      quickLink {
        quickLinkTitle
        quickLinkUrl
      }
      getInTouchHeading
      emailAddress
      haedOffice
      officeHours
      newsletterHeading
      social    
      socialMedia {
        socialIcon {
          node {
            mediaItemUrl
          }
        }
        socialUrl
      }
    }
  }
}  
`;