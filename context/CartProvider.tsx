import { FC, PropsWithChildren, useEffect, useState } from "react"
import { CartContext } from "./CartContext"
import { Cart, Product } from "../interfaces"

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cart, setCart] = useState<Cart[]>([])

  const addProductToCart = (product: Product) => {
    const newCartItem = {
      product,
      quantity: 1
    }
    setCart([...cart, newCartItem])
  }

  const incrementCartProductQuantity = (id: number) => {
    const draft = cart.map(item => {
      if ( item.product.id === id ) {
        item.quantity += 1
      }
      return item
    })

    setCart(draft)
  }

  const decrementCartProductQuantity = (id: number) => {
    const draft = cart.map(item => {
      if ( item.product.id === id ) {
        item.quantity -= 1
      }
      return item
    }).filter(item => item.quantity > 0)

    setCart(draft)
  }

  useEffect(() => {
    const data = JSON.parse( localStorage.getItem('cart') || '[]' )
    setCart( data )
  }, [])  

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider value={{
      //  Properties
      cart,
      totalCart: cart.reduce((acc, prev) => ( prev.quantity * prev.product.price ) + acc , 0),
      totalItems: cart.reduce((acc, prev) => prev.quantity + acc , 0),

      //  Methods
      addProductToCart,
      decrementCartProductQuantity,
      incrementCartProductQuantity,
    }}>
      { children }
    </CartContext.Provider>
  )
}
