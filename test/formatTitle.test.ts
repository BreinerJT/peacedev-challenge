import { formatTitle } from "../helpers"

describe('formatTitle', () => {
  test('should throw if argument passed is not a string', () => {
    // @ts-expect-error
    expect(() => formatTitle(1)).toThrow()
    // @ts-expect-error
    expect(() => formatTitle(['hi'])).toThrow()
    // @ts-expect-error
    expect(() => formatTitle({ hello: 'world' })).toThrow()
  })

  test('should return the same words if length is less than or equal to 4', () => {
    expect(formatTitle('ring')).toBe('ring')
    expect(formatTitle('green shirt')).toBe('green shirt')
    expect(formatTitle('XL blue jeans')).toBe('XL blue jeans')
  })

  test('should return the first four words plus "..." if length is greater than 4', () => {
    expect(formatTitle('XL black shirt of cottom')).toBe('XL black shirt of...')
    expect(formatTitle('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')).toBe('Fjallraven - Foldsack No....')
  })
})