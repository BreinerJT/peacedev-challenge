export const formatPrice = ( price: number ) => {
  if ( typeof price !== 'number' || isNaN(price) ) {
    throw new Error('Function parameter must be a number or a number different of NaN.')
  }

  return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}