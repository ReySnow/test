import { describe, expect, it, vi } from 'vitest'
import { User } from './setTimeout'

describe('setTimeout', () => {
  it('should fetch data', () => {
    const user = new User(1)
    const callback = vi.fn()
    vi.useFakeTimers()
    user.fetchData(callback, 100)
    vi.advanceTimersByTime(100)
    // vi.runAllTimers()

    expect(callback).toBeCalledWith('id: 1')
  })
  it('v2', () => {
    const user = new User(1)
    const callback = vi.fn()
    vi.useFakeTimers()
    user.fetchDataV2(callback)
    vi.advanceTimersToNextTimer()

    expect(callback).toBeCalledWith('id: 1')
  })
})
