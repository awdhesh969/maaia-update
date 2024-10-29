import { gql } from '@apollo/client';
export const HomePageQuery = gql`
  query homepage {
  page(id: "/", idType: URI) {
    seo {
      title
      metaDesc
    }
    homepage {
      heroTitle
      heroVideo {
        node {
          mediaItemUrl
        }
      }
      introductionText
      sectionBackgroundImage{
      node{
        mediaItemUrl
}
      }
      ourPhilosophy {
        ourPhilosophyHeading
        ourPhilosophyText
      }
      ourPhilosophyButtonText
      ourPhilosophyButtonUrl
      collectionSectionTitle
      featuredCollectionHome {
        title
        mediaItemUrl
        location
        is_launching_soon
        launchingSoonText
      }
      ourJourneySectionTitle
      ourJourneyText
      countryList {
        countryName
        countryImage {
          node {
            mediaItemUrl
          }
        }
      }
      mediaSectionTitle
    }
  }
  posts(where: {onlySticky: true}, first: 4) {
    nodes {
      id
      title
      slug
      excerpt
      isSticky
      date
      categories {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          id
          mediaItemUrl
        }
      }
    }
  }

}

`;