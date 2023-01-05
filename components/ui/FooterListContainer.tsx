import { FC } from "react"

interface Props {
  title: string
  children: JSX.Element | JSX.Element[]
}

export const FooterListContainer: FC<Props> = ({ children, title }) => {
  return (
    <div className="grid gap-6">
      <h3 className="font-bold text-lg">
        { title }
        <div className="rounded-full bg-white h-[3px] mt-2" />
      </h3>
      <ul className="pl-6 grid gap-4">
        { children }
      </ul>
    </div>
  )
}
