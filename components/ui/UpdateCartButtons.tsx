import { FC, useContext } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { CartContext } from "../../context"

interface Props {
  children?: number
  id: number
}

export const UpdateCartButtons: FC<Props> = ({ children, id }) => {
  const { decrementCartProductQuantity, incrementCartProductQuantity } = useContext(CartContext)

  return (
    <div className="flex gap-2 justify-center items-center">
      <button onClick={ () => decrementCartProductQuantity(id) } className="bg-secondary text-primary rounded-full p-2">
        <AiOutlineMinus />
      </button>
      <p className="font-bold">{ children }</p>
      <button onClick={ () => incrementCartProductQuantity(id) } className="bg-secondary text-primary rounded-full p-2">
        <AiOutlinePlus />
      </button>
    </div>
  )
}
