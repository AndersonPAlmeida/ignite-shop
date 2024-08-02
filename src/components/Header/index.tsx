import Link from 'next/link'
import { HeaderContainer, ItemAddQtd } from './header'
import Image from 'next/image'
import logoImg from '../../assets/logo.svg'
import { Bag } from '@phosphor-icons/react'
import { Cart } from '../Cart'
import { useCart } from '../../data/hooks/useCart'

export function Header() {
  const { quantityItems } = useCart()

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>
      <Cart variant="cartShopItems" disabled={quantityItems === 0}>
        <Bag size={32} weight="bold" />
        <div>
          {quantityItems > 0 && <ItemAddQtd>{quantityItems}</ItemAddQtd>}
        </div>
      </Cart>
    </HeaderContainer>
  )
}
