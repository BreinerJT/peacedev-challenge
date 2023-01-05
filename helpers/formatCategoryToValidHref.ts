export const formatCategoryToValidHref = (category: string) => {
  return category.split("'").slice(0, 1).join('')
}