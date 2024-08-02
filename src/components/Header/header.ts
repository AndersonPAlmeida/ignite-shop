import { styled } from '../../styles'

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '2rem 1rem 2rem',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})

export const ItemAddQtd = styled('span', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '1.5rem',
  height: '1.5rem',
  padding: '0.75rem',

  backgroundColor: '$green500',
  color: '$white',

  borderRadius: '100%',
})
