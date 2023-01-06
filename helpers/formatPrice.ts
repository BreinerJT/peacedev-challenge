export const formatPrice = ( price: number ) => {
  if ( typeof price !== 'number' ) throw new Error('Parameter must be a number.')
  if ( Number.isNaN(price) ) throw new Error('Function parameter must be a number different of NaN.')

  return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}