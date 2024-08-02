import { styled } from '../../styles'

export const CartContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '3rem',
  height: '3rem',
  padding: '0.75rem',

  border: '0',
  borderRadius: '6px',
  cursor: 'pointer',

  position: 'relative',
  color: '$white',

  variants: {
    variant: {
      cartShopItems: {
        backgroundColor: '$gray800',

        '&:disabled': {
          color: '$gray400',
          cursor: 'not-allowed',
        },
      },
      shopItemAdd: {
        backgroundColor: '$green500',
      },
    },
  },

  div: {
    position: 'absolute',
    top: '-9px',
    right: '-9px',
    padding: '2px',
    backgroundColor: '$gray900',
    borderRadius: '100%',
  },

  '&:not(:disabled):hover': {
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.7)', // Adiciona efeito de brilho
  },
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