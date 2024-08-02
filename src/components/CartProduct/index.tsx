import { X } from '@phosphor-icons/react'
import {
  CartItem,
  CartItems,
  Details,
  ProductCartDetails,
  ProductCartImage,
  ProductContainer,
  PurchaseDetails,
} from './cartProduct'
import Image from 'next/image'
import { useCart } from '../../data/hooks/useCart'
import { CartItem as item } from '../../data/model/CartItem'
import { useState } from 'react'
import axios from 'axios'

export interface CartProductProps {
  onToggle: () => void
}

export function CartProduct({ onToggle }: CartProductProps) {
  const { items, quantityItems, totalPurchasePrice, removeItemCart } = useCart()
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  function handleRemoveItemCart(idItem: string) {
    removeItemCart(idItem)

    if (quantityItems === 1) {
      onToggle()
    }
  }

  async function handleBuyButton() {
    try {
      setIsCreatingCheckoutSession(true)

      const cardProducts = items.map((item) => {
        return {
          price: item.shirt.defaultPriceId,
          quantity: 1,
        }
      })

      const response = await axios.post('/api/checkout', {
        product: cardProducts,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <ProductContainer>
      <header>
        <h2>Sacola de compras</h2>

        <button onClick={onToggle}>
          <X size={26} weight="bold" />
        </button>
      </header>

      <CartItems>
        {items.map(({ shirt }: item) => {
          return (
            <CartItem key={shirt.id}>
              <ProductCartImage>
                <Image
                  src={shirt.imageUrl}
                  width={100}
                  height={100}
                  alt="Imagem do produto colocado no carrinho de compras"
                />
              </ProductCartImage>

              <ProductCartDetails>
                <span>{shirt.name}</span>
                <strong>{shirt.price}</strong>
                <button onClick={() => handleRemoveItemCart(shirt.id)}>
                  Remover
                </button>
              </ProductCartDetails>
            </CartItem>
          )
        })}
      </CartItems>
      <PurchaseDetails>
        <div>
          <Details>
            <span>Quantidade</span>
            <strong>Valor Total</strong>
          </Details>

          <Details>
            <span style={{ alignSelf: 'flex-end' }}>{quantityItems}</span>
            <strong>{`R$ ${totalPurchasePrice.toFixed(2)}`}</strong>
          </Details>
        </div>

        <button
          disabled={quantityItems === 0 || isCreatingCheckoutSession}
          onClick={handleBuyButton}
        >
          Finalizar compra
        </button>
      </PurchaseDetails>
    </ProductContainer>
  )
}
