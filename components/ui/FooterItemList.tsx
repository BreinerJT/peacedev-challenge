import { FC } from "react"
import Link from "next/link"

interface Props {
  href: string
  title: string
}

export const FooterItemList: FC<Props> = ({ href, title }) => {
  return (
    <li className='list-disc capitalize'>
      <Link href={`/${ href }`}>
        { title }
      </Link>
    </li>
  )
}
