import { X } from "@phosphor-icons/react";
import { CartItems, Details, ProductContainer, PurchaseDetails } from "./produto";

export function CartProduct() {
  return (
    <ProductContainer>
      <header>
        <h2>Sacola de compras</h2>

        <button>
          <X size={26} weight="bold" />
        </button>
      </header>

      <CartItems>oi</CartItems>
      <PurchaseDetails>
        <div>
          <Details>
            <span>Quantidade</span>
            <strong>Valor Total</strong>
          </Details>

          <Details>
            <span style={{alignSelf: 'flex-end'}}>3 itens</span>
            <strong>R$ 270,00</strong>
          </Details>    
        </div>

        <button>Finalizar compra</button>
      </PurchaseDetails>
    </ProductContainer>
  )
}