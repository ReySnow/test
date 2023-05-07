import { describe, expect, it, vi } from 'vitest'
import { generateRandomStrings } from './random'

describe('random', () => {
  it('should generate random strings', () => {
    // vi.spyOn(Math, 'random').mockImplementation(() => {
    //   return 0.2
    // })
    vi.spyOn(Math, 'random').mockImplementationOnce(() => {
      return 0.1
    })
    vi.spyOn(Math, 'random').mockImplementationOnce(() => {
      return 0.2
    })
    let result = generateRandomStrings(2)
    expect(result).toBe('je')
  })
})
