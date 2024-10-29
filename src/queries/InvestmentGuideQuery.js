import { gql } from '@apollo/client';
export const InvestmentGuideQuery = gql`
 query InvestmentGuide {
  page(id: "investment-guide", idType: URI) {
    seo {
      title
      metaDesc
    }
    title
    featuredImage{
        node{
            mediaItemUrl
        }
    }
    investmentGuide{
      realEstateSectionHeading
      realEstateSectionText
      realEstateAccordion{
        accordionTitle
        accordionText
      }
      whyInvestInDubaiSectionTitle
      whyInvestInDubai{
        whyInvestIcon{
          node{
            mediaItemUrl
          }
        }
        whyInvestBlockText
        blockTitle
      }
      investWithMaaiyaTitle
      investWithMaaiaText
      investWithMaaiaImage{
        node{
          mediaItemUrl
        }
      }
      iconWithText{
        investWithMaaiaIcon{
          node{
            mediaItemUrl
          }
        }
        investWithMaaiaText
      }
    }
  }
}
`;