export class View {
  couter = 1
  render() {
    Promise.resolve()
      .then(() => {
        this.couter = 2
      })
      .then(() => {
        this.couter = 3
      })
  }
}
