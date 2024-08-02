import { ReactNode } from 'react'
import { Header } from '../components/Header'
import { Container } from '../styles/pages/app'

interface RootLayoutProps {
  children: ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}
