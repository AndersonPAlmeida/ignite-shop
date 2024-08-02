import { createContext, ReactNode, useState } from 'react'
import { CartItem } from '../model/CartItem'
import { Product } from '../model/Product'

interface ContextCartProps {
  children: ReactNode
}

interface ContextCartType {
  items: CartItem[]
  addItemCart: (item: Product) => void
  removeItemCart: (item: string) => void
}

export const CartContext = createContext<ContextCartType>({} as ContextCartType)

// Item específico para inicializar o estado
const initialProduct: Product = {
  id: '1',
  name: 'Camiseta',
  imageUrl: 'https://example.com/image.jpg',
  price: '29.99',
}

const initialCartItem: CartItem = {
  shirt: initialProduct,
}

export function ProviderContextCart({ children }: ContextCartProps) {
  const [items, setItems] = useState<CartItem[]>([initialCartItem])

  function addItemCart(shirt: Product) {
    const index = items.findIndex((object) => object.shirt.id === shirt.id)

    if (index !== -1 && items.length !== 0) {
      return
    }

    setItems((state) => [{ shirt }, ...state])
  }

  function removeItemCart(shirtId: string) {
    const newItems = items.filter((item) => item.shirt.id !== shirtId)

    setItems([...newItems])
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItemCart,
        removeItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
