import { FC } from "react"
import { useRouter } from 'next/router'
import { formatTitle, formatPrice, formatRating } from "../../helpers"

interface Props {
  href: string
  id: number
  image: string
  title: string
  price: number
  rating: number
  circularCard?: boolean
  verticalCard?: boolean
  horizontalCard?: boolean
  squareCard?: boolean
}

export const ProductCard: FC<Props> = (
  { href, id, image, price, title, rating, circularCard, horizontalCard, squareCard, verticalCard }
) => {

  const router = useRouter()

  return (
    <>

      {
        circularCard && (
        <article
          onClick={ () => router.push(`/${ href }/${ id }`) }
          className='grid gap-4 items-center justify-center [&:hover>div]:border-primary [&:hover>div]:shadow-lg cursor-pointer'
        >

          <div className="grid items-center mx-auto p-2 rounded-full bg-neutral-100 h-28 w-28 border border-transparent">
            <img 
              className="w-16 h-16 object-contain mx-auto" 
              src={ image } 
              alt={ title } 
            />
          </div>

          <h3 className="text-center px-2">{ formatTitle( title ) }</h3>

        </article>
      )}

      { horizontalCard && (
        <article
          onClick={ () => router.push(`/${ href }/${ id }`) }
          className='grid gap-4 items-center justify-center bg-neutral-100 [&:hover>img]:border-primary [&:hover>img]:shadow-lg cursor-pointer'
        >

          <img 
            className="w-80 h-40 object-contain mx-auto border rounded-lg" 
            src={ image } 
            alt={ title } 
          />

        </article>
      )}

      { squareCard && (
        <article
          onClick={ () => router.push(`/${ href }/${ id }`) }
          className='grid gap-4 items-center justify-center [&:hover>div]:border-primary [&:hover>div]:shadow-lg cursor-pointer'
        >

          <div className="grid items-center mx-auto p-2 rounded-lg h-28 w-28 bg-neutral-100 border border-transparent">
            <img 
                className="w-16 h-16 object-contain mx-auto" 
                src={ image } 
                alt={ title } 
              />
          </div>

          <h3 className="text-center px-2">{ formatTitle( title ) }</h3>
          <h4 className="text-yellow-500 text-center">{ formatRating(rating) }</h4>

        </article>
      )}

      { verticalCard && (
        <article
          onClick={ () => router.push(`/${ href }/${ id }`) }
          className='p-2 w-44 h-52 grid gap-4 items-center rounded-xl border bg-neutral-100 border-neutral-200 hover:border-primary hover:shadow-lg cursor-pointer'
        >
          <img 
            className="w-20 h-20 object-contain mx-auto" 
            src={ image } 
            alt={ title } 
          />

          <div className="grid gap-2 text-sm px-2">
            <h3 className="font-bold">{ formatTitle( title ) }</h3>
            <h4 className="justify-end font-black">{ formatPrice( price ) }</h4>
          </div>

        </article>      
      )}

    </>
  )
}
