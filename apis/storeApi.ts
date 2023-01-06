import { Category, Product } from "../interfaces"

const baseUrl = 'https://fakestoreapi.com'

export const getCategories = async (): Promise<Category[]> => {
  const resp = await fetch(baseUrl + '/products/categories')
    .then(resp => resp.json())
    .catch(err => console.log(err))

  return resp
}

export const getProducts = async (): Promise<Product[]> => {
  const resp = await fetch(baseUrl + '/products')
    .then(resp => resp.json())
    .catch(err => console.log(err))

  return resp
}

export const getProductsByCategory = async (category: string): Promise<Product[] | null> => {
  
  try {
    const resp = await fetch(baseUrl + `/products/category/${ category }`)
    const data = await resp.json()

    return data
    
  } catch (error) {
    return null
  }
}

export const getProduct = async (id: string) => {
  try {
    const resp = await fetch(baseUrl + `/products/${ id }`)
    const data = await resp.json()

    return data
    
  } catch (error) {
    return null
  }
}
