import { HomeContainer, ItemDetails, Product } from '../styles/pages/home'
import { useKeenSlider } from 'keen-slider/react'
import { stripe } from '../lib/stripe'
import { GetStaticProps } from 'next'

import Stripe from 'stripe'
import Image from 'next/image'

import 'keen-slider/keen-slider.min.css'
import Head from 'next/head'
import { Cart } from '../components/Cart'
import { Bag } from '@phosphor-icons/react'
import { useCart } from '../data/hooks/useCart'
import { Product as Shirt } from '../data/model/Product'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
    defaultPriceId: string
  }[]
}
export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48,
    },
  })

  const { addItemCart } = useCart()

  function handleAddItemCartButton(item: Shirt) {
    addItemCart(item)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              href={`/product/${product.id}`}
              className="keen-slider__slide"
              prefetch={false}
            >
              <Image src={product.imageUrl} width={520} height={520} alt="" />

              <footer>
                <ItemDetails>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </ItemDetails>
                <Cart
                  variant="shopItemAdd"
                  onClick={(event) => {
                    event.preventDefault()
                    handleAddItemCartButton(product)
                  }}
                >
                  <Bag size={32} weight="bold" />
                </Cart>
              </footer>
            </Product>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
