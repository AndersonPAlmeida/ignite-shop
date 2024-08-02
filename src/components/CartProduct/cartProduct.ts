import { styled } from '../../styles'

export const ProductContainer = styled('div', {
  width: '30rem',
  height: '100vh',
  backgroundColor: '$gray800',

  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 1000,

  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  padding: '3rem',

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    color: '$white',

    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      color: '$gray400',
      backgroundColor: 'transparent',
      transition: 'all 0.5s ease-in-out',

      border: '2px solid transparent',
      borderRadius: '6px',

      position: 'absolute',
      top: '-30px',
      right: '-30px',

      cursor: 'pointer',

      '&:hover': {
        borderColor: '$gray900',
      },
    },
  },
})

export const CartItems = styled('div', {
  flex: 1,
  maxHeight: 'calc(100vh - 372px)',
  overflowY: 'auto',

  '> div:not(:last-child)': {
    marginBottom: '1rem',
  },

  '&::-webkit-scrollbar': {
    width: '8px', // Largura da barra de rolagem
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'transparent', // Fundo semi-transparente para o polegar
    borderRadius: '4px', // Bordas arredondadas para o polegar
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: 'transparent', // Fundo transparente para a trilha
  },

  // Estilos para navegadores Firefox
  '&': {
    scrollbarWidth: 'thin', // Largura fina da barra de rolagem
    scrollbarColor: 'transparent transparent', // Cor do polegar e da trilha
  },
})

export const CartItem = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1.25rem',
  maxHeight: '100px',
  height: '100px',
})

export const ProductCartImage = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'fill',
  },
})

export const ProductCartDetails = styled('div', {
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  fontSize: '$md',
  color: '$gray300',

  button: {
    border: 0,
    backgroundColor: 'transparent',
    fontSize: '$md',
    color: '$green500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.5s ease-in-out',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const PurchaseDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3.563rem',

  div: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',

    span: {
      fontSize: '1rem',
    },

    strong: {
      fontSize: '$xl',
    },
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    padding: '1.25rem',
    backgroundColor: '$green500',
    border: 0,
    borderRadius: '8px',
    transition: 'all 0.5s ease-in-out',

    color: '$white',
    fontSize: '$md',
    cursor: 'pointer',

    '&:disabled': {
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
  },
})

export const Details = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
})
