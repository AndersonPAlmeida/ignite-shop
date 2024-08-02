import Link from 'next/link'
import { HeaderContainer, ItemAddQtd } from './header'
import Image from 'next/image'
import logoImg from '../../assets/logo.svg'
import { Bag } from '@phosphor-icons/react'
import { Cart } from '../Cart'
import { useCart } from '../../data/hooks/useCart'
import { useState } from 'react'
import { CartProduct } from '../CartProduct'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const { quantityItems } = useCart()

  function handleOpenMenuCart() {
    setIsOpen((state) => !state)
  }

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>
      <Cart
        variant="cartShopItems"
        disabled={quantityItems === 0}
        onClick={() => handleOpenMenuCart()}
      >
        <Bag size={32} weight="bold" />
        <div>
          {quantityItems > 0 && <ItemAddQtd>{quantityItems}</ItemAddQtd>}
        </div>
      </Cart>

      {isOpen && <CartProduct onToggle={handleOpenMenuCart} />}
    </HeaderContainer>
  )
}
