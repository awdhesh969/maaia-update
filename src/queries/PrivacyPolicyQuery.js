import { gql } from '@apollo/client';
export const PrivacyPolicyQuery = gql`
  query TermsAndConditionsPage {
  page(id: "privacy-policy", idType: URI) {
    seo {
      title
      metaDesc
    }
    title
    content

  }
}
`;