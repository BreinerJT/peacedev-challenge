import { FC, useMemo } from "react"
import Link from "next/link"
import { FiChevronRight } from 'react-icons/fi'
import { ProductCard } from "./ProductCard"
import { Product } from "../../interfaces"

interface Props {
  products: Product[]
  circularCard?: boolean
  verticalCard?: boolean
  horizontalCard?: boolean
  squareCard?: boolean
  src: string
  title: string
  highlight: string
}

export const CategorySection: FC<Props> = ({ highlight, products, src, title, ...props }) => {

  const draft: Product[] = useMemo(() => {
    let draft = structuredClone( products )

    return draft.slice(0, 3)
  }, [products])

  return (
    <article className="grid gap-8">
      <div className="flex justify-between border-[1px] border-transparent border-b-neutral-200">
        <h2 className="text-slate-500 font-bold text-lg mt-2">
          { title } {' '}
          <span className="text-primary">{ highlight }</span>
          <div className="rounded-full bg-primary w-full h-[3px] mt-2" />
        </h2>
        <Link href={ src } className="flex gap-1 items-center text-sm [&:hover>span]:translate-x-1">
          View All
          <span className="text-primary transition-transform duration-300">
            <FiChevronRight size='18' />
          </span>
        </Link>
      </div>
      <section className="flex justify-between items-center">
        {
          draft.map(product => (
            <ProductCard 
              href={ src }
              id={ product.id }
              image={ product.image }
              price={ product.price }
              title={ product.title }
              rating={ product.rating.rate }
              key={ product.id }
              { ...props }
            />
          ))
        }
      </section>
    </article>
  )
}
