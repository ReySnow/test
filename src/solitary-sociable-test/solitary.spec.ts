import { expect, it, vi } from 'vitest'
import { sendEmail } from './EmailService'
import { Order } from './order'

vi.mock('./EmailService', () => {
  return {
    sendEmail: vi.fn()
  }
})

vi.mock('./InventoryService', () => {
  return {
    checkStock: () => true
  }
})

it('独居测试:should send an email', () => {
  const order = new Order()
  order.processOrder({ name: 'test', count: 100 })
  expect(sendEmail).toHaveBeenCalled()
})
