import { FC } from "react"

interface Props {
  externalRadius: number
  internalRadius: number
  top?: string
  left?: string
  bottom?: string
  right?: string
}

export const CircleBackground: FC<Props> = ({ externalRadius, internalRadius, bottom, left, right, top }) => {
  return (
    <div
      className={`absolute p-2 grid justify-center items-center border border-[#05ABF3] rounded-full 
      w-[${ externalRadius }px] h-[${ externalRadius }px] ${ top ? `${ top }` : `${ bottom }` } ${ left ? `${ left }` : `${ right }` }`}
    >
      <div className={`bg-[#0C9BDA] w-[${ internalRadius }px] h-[${ internalRadius }px] rounded-full`} />
    </div>
  )
}
