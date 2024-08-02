import { ReactNode } from 'react'
import { CartContainer } from './cart'

interface CartProps {
  children: ReactNode
  variant?: 'cartShopItems' | 'shopItemAdd'
}

export function Cart({ children, variant }: CartProps) {
  return <CartContainer variant={variant}>{children}</CartContainer>
}
