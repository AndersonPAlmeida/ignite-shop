import Link from 'next/link'
import {
  SuccessContainer,
  ImageContainer,
  SuccessProducts,
} from '../styles/pages/success'
import { GetServerSideProps } from 'next'
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'
import Image from 'next/image'
import Head from 'next/head'

interface SuccessProps {
  costumerName: string
  products: {
    id: string
    name: string
    imageUrl: string
  }[]
}

export default function Success({ costumerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <SuccessProducts>
          {products.map((product) => {
            return (
              <ImageContainer key={product.id}>
                <Image
                  src={product.imageUrl}
                  width={140}
                  height={130}
                  alt={product.name}
                />
              </ImageContainer>
            )
          })}
        </SuccessProducts>

        <h1>Compra efetuada</h1>

        <p>
          Uhuul <strong>{costumerName}</strong>, sua compra de {products.length}{' '}
          camisetas já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const costumerName = session.customer_details.name

  const products = session.line_items!.data.map((item) => {
    const product = item.price!.product as Stripe.Product

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images![0],
    }
  })

  return {
    props: {
      costumerName,
      products,
    },
  }
}
