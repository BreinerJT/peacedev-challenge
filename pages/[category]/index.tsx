import { NextPage, GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import { ShopLayout } from "../../components/layouts/ShopLayout"
import { ProductCard, Footer } from "../../components/ui"
import { storeApi } from "../../apis"
import { Category, Product } from "../../interfaces"

interface Props {
  categories: Category[]
  products: Product[]
}

const CategoryPage: NextPage<Props> = ({ categories, products }) => {
  const router = useRouter()
  const { category } = router.query as { category: string }

  return (
    <ShopLayout pageDescription={`MegaMart's ${ category } category`} title={`MegaMart | ${ category }`}>
      <h2 className='capitalize text-2xl text-primary font-bold pt-4'>{ category }</h2>
      <ul className='flex flex-wrap gap-8 justify-center py-12'>
        {
          products.map(product => (
            <ProductCard 
              key={ product.id }
              href={ category } 
              id={ product.id } 
              image={ product.image } 
              title={ product.title } 
              price={ product.price } 
              rating={ product.rating.rate } 
              verticalCard  
            />
          ))
        }
      </ul>
      <footer>
        <Footer categories={ categories } />
      </footer>
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
  const categories = await storeApi.getCategories()

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
      categories,
      products
    }
  }
}

export default CategoryPage
