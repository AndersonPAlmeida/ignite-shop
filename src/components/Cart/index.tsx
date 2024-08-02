import { ReactNode } from 'react'
import { CartContainer } from './cart'

interface CartProps {
  children: ReactNode
  variant?: 'cartShopItems' | 'shopItemAdd'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

export function Cart({ children, variant, onClick, disabled }: CartProps) {
  return (
    <CartContainer variant={variant} onClick={onClick} disabled={disabled}>
      {children}
    </CartContainer>
  )
}
