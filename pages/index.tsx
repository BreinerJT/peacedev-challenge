import { GetStaticProps, NextPage } from 'next'
import { ShopLayout } from '../components/layouts/ShopLayout'
import { CategoryPillList } from '../components/ui'
import { storeApi } from '../apis'
import { Category } from '../interfaces'

interface Props {
  categories: Category[]
}

const HomePage: NextPage<Props> = ({ categories }) => {  
  return (
    <ShopLayout title='Megamart' pageDescription='Megamart Shop'>
      <CategoryPillList categories={ categories } />
    </ShopLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const categories = await storeApi.getCategories()

  return {
    props: {
      categories,
    }
  }
}

export default HomePage
