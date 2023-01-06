export const formatRating = (rate: number) => {
  if ( typeof rate !== 'number' ) throw new Error('Parameter must be a number.')
  if ( Number.isNaN(rate) ) throw new Error('Function parameter must be a number different of NaN.')

  return '★'.repeat(Math.round(rate))
}