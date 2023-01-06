import { FC } from 'react'
import { Category } from '../../interfaces'

interface Props {
  category: Category
}

export const CategoryPill: FC<Props> = ({ category }) => {
  return (
    <li 
      className='py-2 px-4 rounded-full flex gap-2 items-center cursor-pointer bg-secondary
      hover:bg-primary hover:text-white [&:hover>h5]:text-white transition-colors'
    >
      {/* Todo: Change to Link */}
      <h5 className='text-slate-900 capitalize'>{ category }</h5>
    </li>
  )
}
