import { FC } from 'react'
import { useRouter } from 'next/router'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { BsDash } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import { CircleBackground } from './CircleBackground'
import { useCarousel } from '../../hooks/useCarousel'
import { formatCategoryToValidHref, formatRating } from '../../helpers'
import { Product } from '../../interfaces'

interface Props {
  products: Product[]
}

export const ProductsCarousel: FC<Props> = ({ products }) => {
  const { currentIndex, draft, selected, goToSlide, nextSlide, prevSlide } = useCarousel(products)
  const router = useRouter()

  return (
    <div className='h-60 w-full rounded-lg m-auto py-16 px-4 relative overflow-hidden group'>

      <div 
        className='flex h-full justify-around items-center select-none'
      >

        <div className='text-center grid gap-6'>
          <h2 className='text-2xl text-slate-500 font-black flex flex-wrap w-52'>
            { selected.title }
          </h2>
          <h3 className='text-yellow-500 text-xl font-bold'>{ formatRating(selected.rating.rate) }</h3>
        </div>
        
        <div
          style={{ backgroundImage: `url(${selected.image})` }}
          className='w-44 h-44 bg-center bg-contain bg-no-repeat duration-300 group-hover:scale-110 z-10 cursor-pointer'
          onClick={ () => router.push(`/${ formatCategoryToValidHref(selected.category) }/${ selected.id }`) }
        />

      </div>

      <div 
        onClick={prevSlide} 
        className='absolute top-[50%] -translate-x-0 translate-y-[-50%] -left-8 text-2xl rounded-full p-6 bg-primary text-white cursor-pointer [&:hover>svg]:translate-x-0'
      >
        <FiChevronLeft size={30} className='translate-x-2 duration-300' />
      </div>

      <div 
        onClick={nextSlide} 
        className='absolute top-[50%] -translate-x-0 translate-y-[-50%] -right-8 text-2xl rounded-full p-6 bg-primary text-white cursor-pointer [&:hover>svg]:translate-x-0'
      >
        <FiChevronRight size={30} className='-translate-x-2 duration-300' />
      </div>

      <div className='absolute -top-60 right-96'>
        <CircleBackground externalRadius={384} internalRadius={360} />
      </div>
      <div className='absolute -bottom-20 right-10'>
        <CircleBackground externalRadius={160} internalRadius={136} />
      </div>

      <div className='absolute bottom-2 left-12 flex justify-center items-center'>
        {draft.map((slide, slideIndex) => (
          <div
            key={slide.id}
            onClick={() => goToSlide(slideIndex)}
            className='text-primary text-2xl cursor-pointer'
          >
            {
              slideIndex === currentIndex
                ? <BsDash size={30} strokeWidth={ 2 } />
                : <RxDotFilled />
            }            
          </div>
        ))}
      </div>

    </div>
  )
}
