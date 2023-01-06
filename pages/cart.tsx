import { ShopLayout } from "../components/layouts/ShopLayout"
import { UpdateCartButtons } from "../components/ui"
import { formatPrice, formatTitle } from "../helpers"
import { Cart } from "../interfaces"

const data: Cart[] = [
  {
    product: {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
      "rate": 3.9,
      "count": 120
      }
    },
    quantity: 3
  },
  {
    product: {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
      "rate": 3.9,
      "count": 120
      }
    },
    quantity: 5
  },
  {
    product: {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
      "rate": 3.9,
      "count": 120
      }
    },
    quantity: 2
  },
]

const CartPage = () => {
  return (
    <ShopLayout pageDescription="User Cart" title='Cart | 2 items'>
      <div className="flex justify-between items-center capitalize text-2xl text-primary font-bold pt-4">
        <h2>Cart</h2>
        <h2>Total: { formatPrice(4500) }</h2>
      </div>
      <ul className="grid gap-8 py-12">
        {
          data.map(item => (
            <div key={ item.product.id } className="flex justify-between items-center">

              <div className="flex gap-2 items-center">
                <img className="w-36 h-36 object-contain" src={ item.product.image } alt={ item.product.title } />

                <div className="text-center font-bold grid gap-2">
                  <p>{ formatTitle(item.product.title) }</p>
                  <p>{ formatPrice(item.product.price) }</p>
                  <UpdateCartButtons>
                    { item.quantity }
                  </UpdateCartButtons>
                </div>

              </div>

              <p className='capitalize text-lg text-primary font-bold'>
                { formatPrice( item.product.price * item.quantity ) }
              </p>

            </div>
          ))
        }
      </ul>
    </ShopLayout>
  )
}

export default CartPage