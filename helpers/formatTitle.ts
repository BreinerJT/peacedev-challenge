export const formatTitle = ( title: string ) => {
  return title.split(' ').length > 4 
    ? title.split(' ').slice(0, 4).join(' ') + '...'
    : title
}