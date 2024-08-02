import Link from 'next/link'
import { HeaderContainer, ItemAddQtd } from './header'
import Image from 'next/image'
import logoImg from '../../assets/logo.svg'
import { Bag } from '@phosphor-icons/react'
import { Cart } from '../Cart'

export function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>
      <Cart variant="cartShopItems">
        <Bag size={32} weight="bold" />
        <div>
          <ItemAddQtd>0</ItemAddQtd>
        </div>
      </Cart>
    </HeaderContainer>
  )
}
