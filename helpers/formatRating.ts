export const formatRating = (rate: number) => {
  return '★'.repeat(Math.round(rate))
}