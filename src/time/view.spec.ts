import flushPromises from 'flush-promises'
import { describe, expect, it } from 'vitest'
import { View } from './view'
describe('view', () => {
  it('should change couter', async () => {
    const view = new View()
    view.render()
    await flushPromises()
    expect(view.couter).toBe(3)
  })
})
