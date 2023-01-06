import { useContext } from "react"
import { BsCartXFill } from 'react-icons/bs'
import { CartContext } from "../context"
import { ShopLayout } from "../components/layouts/ShopLayout"
import { UpdateCartButtons } from "../components/ui"
import { formatPrice, formatTitle } from "../helpers"

const CartPage = () => {
  const { cart, totalCart, totalItems } = useContext(CartContext)

  return (
    <ShopLayout pageDescription="User Cart" title={`Cart | ${ totalItems } items`}>
      <div className="flex justify-between items-center capitalize text-2xl text-primary font-bold pt-4">
        <h2>Cart</h2>
        {
          cart.length > 0 && <h2>Total: { formatPrice(totalCart) }</h2>
        }
      </div>
      <ul className="grid gap-8 py-12">
        {
          cart.length === 0
            ? (
                <div className="grid gap-8 justify-center items-center text-primary">
                  <h2 className="font-black text-4xl">
                    Your cart is empty
                  </h2>
                    <BsCartXFill className="mx-auto" size={50} />
                </div>
              )
            : (
                cart.map(item => (
                  <li key={ item.product.id } className="flex justify-between items-center">
      
                    <div className="flex gap-2 items-center">
                      <img className="w-36 h-36 object-contain" src={ item.product.image } alt={ item.product.title } />
      
                      <div className="text-center font-bold grid gap-2">
                        <p>{ formatTitle(item.product.title) }</p>
                        <p>{ formatPrice(item.product.price) }</p>
                        <UpdateCartButtons id={ item.product.id }>
                          { item.quantity }
                        </UpdateCartButtons>
                      </div>
      
                    </div>
      
                    <p className='capitalize text-lg text-primary font-bold'>
                      { formatPrice( item.product.price * item.quantity ) }
                    </p>
      
                  </li>
                ))
            )
        }
      </ul>
    </ShopLayout>
  )
}

export default CartPage