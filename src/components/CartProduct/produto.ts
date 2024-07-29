import { styled } from "../../styles";

export const ProductContainer = styled('div', {
  width: '30rem',
  minHeight: '100vh',
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
      }
    }
  }
})

export const CartItems = styled('div', {
  flex: 1,
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
     }
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

    "&:hover": {
      backgroundColor: '$green300',
    }
  }
})

export const Details = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
})
