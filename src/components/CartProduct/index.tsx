import { X } from '@phosphor-icons/react'
import {
  CartItem,
  CartItems,
  Details,
  ProductCartDetails,
  ProductCartImage,
  ProductContainer,
  PurchaseDetails,
} from './produto'
import Image from 'next/image'

export function CartProduct() {
  return (
    <ProductContainer>
      <header>
        <h2>Sacola de compras</h2>

        <button>
          <X size={26} weight="bold" />
        </button>
      </header>

      <CartItems>
        <CartItem>
          <ProductCartImage>
            <Image
              src="https://files.stripe.com/links/MDB8YWNjdF8xUEhyMnZJdU14ZmNMTkF5fGZsX3Rlc3RfMGR3WjFibmdOa3ZrN1Rjcm5XMDluOXZC00FbWbIGop"
              alt="imagem do item adicionado ao carrinho"
              width={100}
              height={100}
            />
          </ProductCartImage>

          <ProductCartDetails>
            <span>Camiseta Beyond the Limits</span>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </ProductCartDetails>
        </CartItem>
      </CartItems>
      <PurchaseDetails>
        <div>
          <Details>
            <span>Quantidade</span>
            <strong>Valor Total</strong>
          </Details>

          <Details>
            <span style={{ alignSelf: 'flex-end' }}>3 itens</span>
            <strong>R$ 270,00</strong>
          </Details>
        </div>

        <button>Finalizar compra</button>
      </PurchaseDetails>
    </ProductContainer>
  )
}
