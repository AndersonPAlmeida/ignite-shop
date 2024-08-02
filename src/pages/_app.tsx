import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { ProviderContextCart } from '../data/contexts/ContextCart'
import { RootLayout } from './layout'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProviderContextCart>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ProviderContextCart>
  )
}
