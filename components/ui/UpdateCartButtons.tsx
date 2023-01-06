import { FC, PropsWithChildren } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

export const UpdateCartButtons: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <button className="bg-secondary text-primary rounded-full p-2">
        <AiOutlineMinus />
      </button>
      <p>{ children }</p>
      <button className="bg-secondary text-primary rounded-full p-2">
        <AiOutlinePlus />
      </button>
    </div>
  )
}
