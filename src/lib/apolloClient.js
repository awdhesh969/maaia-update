import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const apolloClient = new ApolloClient({
  link: new HttpLink({
    // uri: "http://localhost:3000/api/graphql",
    uri: `${process.env.NEXT_PUBLIC_API_URL}/api/graphql`,
  }),
  cache: new InMemoryCache({
    resultCaching: false,
  }),
});

export default apolloClient;