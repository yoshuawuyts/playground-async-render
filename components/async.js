var Nanocomponent = require('nanocomponent')
var html = require('choo/html')

module.exports = class Async extends Nanocomponent {
  static id (arg) {
    return arg
  }

  constructor (name, state, emit) {
    super(name)
    this.state = state
    this.emit = emit
  }

  render () {
    return html`
      <div>
        rendered
      </div>
    `
  }

  update () {
    return true
  }
}
