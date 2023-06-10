import { expect, it, vi } from 'vitest'
import { sendEmail } from './EmailService'
import { updateStock } from './InventoryService'
import { Order } from './order'

vi.mock('./EmailService', () => {
  return {
    sendEmail: vi.fn()
  }
})

it('群居测试:should send an email', () => {
  updateStock({ name: 'test', count: 100 })
  const order = new Order()
  order.processOrder({ name: 'test', count: 100 })
  expect(sendEmail).toHaveBeenCalled()
})
