import { formatRating } from "../helpers"

describe('formatRating', () => {
  test('should throw if argument passed is not a number', () => {
    // @ts-expect-error
    expect(() => formatRating('hello')).toThrow()
    // @ts-expect-error
    expect(() => formatRating(['hello', 'world'])).toThrow()
  })

  test('should throw if argument passed is NaN', () => {
    // @ts-expect-error
    expect(() => formatRating('9' + 1)).toThrow()
    // @ts-expect-error
    expect(() => formatRating('peacedev' + 10)).toThrow()
  })

  test('should return "★★★★" if number passed is rounded', () => {
    expect(formatRating(4.2)).toBe('★★★★')
    expect(formatRating(3.7)).toBe('★★★★')
    expect(formatRating(3.9)).toBe('★★★★')
  })
})