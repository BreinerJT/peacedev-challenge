import { createContext } from 'react'
import { Cart, Product } from '../interfaces'

interface ContextProps {
  cart: Cart[]
  totalCart: number
  totalItems: number

  //  Methods
  addProductToCart: (product: Product) => void
  incrementCartProductQuantity: (id: number) => void
  decrementCartProductQuantity: (id: number) => void
}

export const CartContext = createContext({} as ContextProps)