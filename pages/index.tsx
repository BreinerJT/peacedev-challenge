import { GetStaticProps, NextPage } from 'next'
import { ShopLayout } from '../components/layouts/ShopLayout'
import { CategoryPillList, CategorySection, Footer } from '../components/ui'
import { storeApi } from '../apis'
import { Category, Product } from '../interfaces'

interface Props {
  categories: Category[]
  products: Product[]
}

const HomePage: NextPage<Props> = ({ categories, products }) => {
  return (
    <ShopLayout title='Megamart' pageDescription='Megamart Shop'>
      
      <div className='absolute left-0 w-screen h-[1px] bg-gray-200' />
        <CategoryPillList categories={ categories } />
      <div className='absolute left-0 w-screen h-[1px] bg-gray-200' />

      <section className='grid gap-16 py-16'>
        <CategorySection 
          title='Everything for'
          highlight='Men'
          products={ products.filter(product => product.category === 'men\'s clothing') } 
          src='/men' 
          verticalCard
        />
        <CategorySection 
          title='Grab the best deals on'
          highlight='Jewelery'
          products={ products.filter(product => product.category === 'jewelery') } 
          src='/jewelery'
          circularCard
        />
        <CategorySection 
          title='Everything for'
          highlight='Women'
          products={ products.filter(product => product.category === 'women\'s clothing') } 
          src='/women' 
          horizontalCard
        />
        <CategorySection 
          title='Top'
          highlight='Electronics'
          products={ products.filter(product => product.category === 'electronics') } 
          src='/electronics'
          squareCard
        />
      </section>

      <footer>
        <Footer categories={ categories } />
      </footer>

    </ShopLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const categories = await storeApi.getCategories()
  const products = await storeApi.getProducts()

  return {
    props: {
      categories,
      products
    }
  }
}

export default HomePage
