import { describe, expect, it, vi } from 'vitest'
import { delay, fetchUserData } from './promise'

describe('promise', () => {
  it('1', async () => {
    let result = await fetchUserData()
    expect(result).toBe('1')
  })
  it('delay', async () => {
    // 直接这样会等待  不快速响应
    // let result = await delay(1000)
    // expect(result).toBe('1')

    vi.useFakeTimers()
    let result = delay(1000)
    vi.advanceTimersToNextTimer()
    expect(result).resolves.toBe('1')
  })
})
