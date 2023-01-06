import { useState, useMemo } from "react"
import { Product } from "../interfaces"

const CarouselItemsLength: number = 7

export const useCarousel = (products: Product[]) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const draft: Product[] = useMemo(() => {
    let draft = structuredClone( products )

    return draft.slice(0, CarouselItemsLength)
  }, [products])

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? draft.length - 1 : currentIndex - 1
    setCurrentIndex( newIndex )
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === draft.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex( newIndex )
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex( slideIndex )
  }
  
  return {
    // Properties
    currentIndex,
    draft,
    selected: draft[currentIndex],

    // Methods
    goToSlide,
    nextSlide,
    prevSlide,
  }  
}
