import { FC } from "react"
import { CategoryPill } from "./"
import { Category } from "../../interfaces"

interface Props {
  categories: Category[]
}

export const CategoryPillList: FC<Props> = ({ categories }) => {
  return (
    <ul className='flex justify-between py-4'>
      {
        categories.map(category => (
          <CategoryPill key={ category } category={ category } />
        ))
      }
    </ul>
  )
}
