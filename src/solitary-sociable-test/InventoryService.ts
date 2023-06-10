const stock = [
  {
    name: 's',
    count: 12
  }
]

export function checkStock(order: any) {
  const item = stock.find((item) => item.name === order.name)
  if (!item) {
    return false
  }
  return item.count > 0
}

export function updateStock(order: any) {
  const stockItem = stock.find((item) => item.name === order.name)
  if (!stockItem) {
    stock.push(order)
  } else {
    stockItem.count += order.count
  }
}
