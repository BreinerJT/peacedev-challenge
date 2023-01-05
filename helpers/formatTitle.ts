export const formatTitle = ( title: string ) => {
  return title.split(' ').length > 5 
    ? title.split(' ').slice(0, 5).join(' ') + '...'
    : title
}