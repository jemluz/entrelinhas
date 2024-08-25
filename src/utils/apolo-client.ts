import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://sa-east-1.cdn.hygraph.com/content/cm090dk0c05ao07uo9s5i4vd0/master',
  cache: new InMemoryCache(),
})

export default client
