import { describe, expect, it } from 'vitest'
import { Counter } from './counter'

describe('class Counter 状态验证', () => {
  it('should increment', () => {
    const counter = new Counter()
    counter.increment()

    expect(counter.getCounter()).toBe(1)
  })
})
