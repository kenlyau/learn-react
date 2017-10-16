export class Dispatcher {
  constructor () {
    this.cbList = []
  }
  dispatch (obj) {
    this.cbList.map(cb => cb(obj))
  }
  register (fn) {
    this.cbList.push(fn)
  }
}
