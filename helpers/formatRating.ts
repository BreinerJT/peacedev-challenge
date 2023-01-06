export const formatRating = (rate: number) => {
  if ( typeof rate !== 'number' || isNaN(rate) ) {
    throw new Error('Function parameter must be a number or a number different of NaN.')
  }

  return '★'.repeat(Math.round(rate))
}