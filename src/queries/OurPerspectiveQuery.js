import { gql } from '@apollo/client';
export const OurPerspectiveQuery = gql`
 query OurPerspective {
  page(id: "our-perspective", idType: URI) {
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
    ourPerspective {
      opWeAreMaaiaSectionTitle
      opWeAreMaaiaText
      decodingTheDifferenceTitle
      decodingTheDifferenceText
      decodingTheDifferenceRightSideHeading
      thoughtfulReworkingSlider {
        sliderCardTitle
        slideCardText
        sliderCardIcon {
          node {
            mediaItemUrl
          }
        }
      }
      consciousLivingSectionHaeding
      consciousLivingText
      consciousLivingFeatures {
        consciousLivingIcon {
          node {
            mediaItemUrl
          }
        }
        consciousLivingTitle
        consciousLivingText
      }
      leadershipSectionTitle
      profileName
      designation
      profileText
      profileSocialIcon {
        node {
          mediaItemUrl
        }
      }
      profileSocialIconUrl
      ourTeamSectionTitle
      ourTeams {
        teamName
        teamDesignation
        teamProfileImage {
          node {
            mediaItemUrl
          }
        }
        teamBio
        teamSocialProfileIcon {
          node {
            mediaItemUrl
          }
        }
        teamSocialProfileUrl
      }
    }
  }
}
  
`;