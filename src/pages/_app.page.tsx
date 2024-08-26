import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { ApolloProvider } from '@apollo/client'
import client from '../utils/apolo-client'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
