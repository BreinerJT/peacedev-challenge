import { FC } from "react"
import Head from "next/head"
import { Navbar } from "../ui/Navbar"
import { Lato } from '@next/font/google'

const lato = Lato({ subsets: ['latin'], weight: ['400', '700', '900'] })

interface Props {
  children: JSX.Element | JSX.Element[]
  imageFullUrl?: string
  pageDescription: string
  title: string
}

export const ShopLayout: FC<Props> = ({ children, imageFullUrl, pageDescription, title }) => {
  return (
    <>
      <Head>

        <title>{ title }</title>
        <meta name="description" content={ pageDescription } />
        <meta name="og:title" content={ title } />
        <meta name="og:description" content={ pageDescription } />
        { imageFullUrl && (
          <meta name="og:image" content={ imageFullUrl } />
        )}

      </Head>

      <nav className={`${ lato.className } px-24`}>
        <Navbar />
      </nav>

      <main className={`${ lato.className } px-24`}>
        { children }
      </main>

    </>
  )
}
