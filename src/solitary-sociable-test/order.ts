import { sendEmail } from './EmailService'
import { checkStock } from './InventoryService'

export class Order {
  processOrder(order) {
    const isOK = checkStock(order)
    if (isOK) {
      sendEmail()
    }
  }
}
