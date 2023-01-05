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
