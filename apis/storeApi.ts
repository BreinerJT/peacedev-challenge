import { Category } from "../interfaces"

const baseUrl = 'https://fakestoreapi.com'

export const getCategories = async (): Promise<Category[]> => {
  const resp = await fetch(baseUrl + '/products/categories')
    .then(resp => resp.json())
    .catch(err => console.log(err))

  return resp
}
