import { FC } from "react"

interface Props {
  externalRadius: number
  internalRadius: number
}

export const CircleBackground: FC<Props> = ({ externalRadius, internalRadius }) => {
  return (
    <div
      style={{ width: externalRadius, height: externalRadius }}
      className="grid justify-center items-center border border-[#05ABF3] rounded-full"
    >
    <div 
      style={{ width: internalRadius, height: internalRadius }} 
      className="bg-[#0C9BDA] rounded-full" 
    />
  </div>
  )
}
