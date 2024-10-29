import { gql } from '@apollo/client';
export const FooterQuery = gql`
  query HeaderFooterQuery {
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