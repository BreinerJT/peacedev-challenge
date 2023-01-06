import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { FiShoppingCart } from 'react-icons/fi'
import { ShopLayout } from '../../components/layouts/ShopLayout'
import { formatPrice, formatRating } from '../../helpers'
import { storeApi } from '../../apis'
import { Product } from '../../interfaces'

interface Props {
  product: Product
}

const ProductPage: NextPage<Props> = ({ product }) => {
  return (
    <ShopLayout 
      pageDescription={ product.title } 
      title={ product.title } 
      imageFullUrl={ product.image } 
    >
      <div className='flex justify-between items-center pt-4'>

        <h2 className='capitalize text-2xl text-primary font-bold'>{ product.title }</h2>

        <Link href={`/${product.category}`}>
          <span className='font-bold text-sm text-primary underline underline-offset-4'>
            See more items from this category
          </span>
        </Link>

      </div>
      <div className='flex gap-16 items-center py-12'>

        <img className='w-80 h-96 rounded-lg' src={ product.image } alt={ product.title } />

        <div className='grid gap-4'>
          <p className='font-bold text-xl'>Price: { formatPrice(product.price) }</p>
          <p className='grid gap-1 font-bold text-xl'>Description:<span className='pl-4 font-normal text-base'>{ product.description }</span></p>
          <p className='font-bold text-xl'>Rated <span className='text-yellow-500'>{ formatRating(product.rating.rate) }</span> by { product.rating.count } people</p>
          <div>
            <button
              className='flex gap-2 justify-center items-center font-bold bg-secondary py-1 px-2 rounded-xl hover:bg-primary hover:text-white transition-colors duration-300'
            >
              <FiShoppingCart />
              Add to cart
            </button>
          </div>
        </div>

      </div>
    </ShopLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products20 = [...Array(20)].map((_, index) => `${ index + 1 }`)

  return {
    paths: products20.map(id => ({
      params: { id }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }
  const product = await storeApi.getProduct( id )

  if ( !product ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      product
    }
  }
}

export default ProductPage