import { gql } from '@apollo/client';
export const TermsConditionQuery = gql`
  query TermsAndConditionsPage {
  page(id: "terms-and-conditions", idType: URI) {
    seo {
      title
      metaDesc
    }
    title
    content

  }
}
`;