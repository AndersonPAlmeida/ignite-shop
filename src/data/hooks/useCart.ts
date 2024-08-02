import { useContext } from 'react'
import { CartContext } from '../contexts/ContextCart'

export const useCart = () => useContext(CartContext)
