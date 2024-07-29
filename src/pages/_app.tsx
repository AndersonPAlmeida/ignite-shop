import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'
import { Cart, ItemAddQtd } from '../styles/pages/cart'
import { Bag } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import logoImg from '../assets/logo.svg'
import { CartProduct } from '../components/CartProduct'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
        <Cart variant="cartShopItems">
          <Bag size={32} weight="bold" />
          <div>
            <ItemAddQtd>0</ItemAddQtd>
          </div>
        </Cart>
      </Header>
      <Component {...pageProps} />
      <CartProduct />
    </Container>
  )
}
