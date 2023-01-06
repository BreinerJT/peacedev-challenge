import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { storeApi } from '../apis'
import { ShopLayout } from '../components/layouts/ShopLayout'
import { Product } from '../interfaces'

interface Props {
  products: Product[]
}

const CategoryPage: NextPage<Props> = ({ products }) => {
  console.log(products)
  return (
    <ShopLayout pageDescription='' title=''>
      <div>CategoryPage</div>
    </ShopLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await storeApi.getCategories()

  return {
    paths: categories.map(category => ({
      params: {
        category
      }
    })),
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { category } = params as { category: string }
  const products = await storeApi.getProductsByCategory( category )

  if ( !products || products.length === 0 ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      products
    }
  }
}

export default CategoryPage
