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
  quantityItems: number
}

export const CartContext = createContext<ContextCartType>({} as ContextCartType)

export function ProviderContextCart({ children }: ContextCartProps) {
  const [items, setItems] = useState<CartItem[]>([])

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

  const quantityItems = items.length

  return (
    <CartContext.Provider
      value={{
        items,
        addItemCart,
        removeItemCart,
        quantityItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
