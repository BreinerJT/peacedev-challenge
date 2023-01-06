export const formatTitle = ( title: string ) => {
  if ( typeof title !== 'string' ) throw new Error('Parameter must be a string.')

  return title.split(' ').length > 4 
    ? title.split(' ').slice(0, 4).join(' ') + '...'
    : title
}