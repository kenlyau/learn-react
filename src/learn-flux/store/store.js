import dispatcher from './dispatcher.js'
import constants from './constant.js'
import {EventEmitter} from 'events'

const _store = {
  list: []
}
const Store = Object.assign({}, EventEmitter.prototype, {
  addChnageListener: cb => this.on('change', cb),
  removeChnageListener: cb => this.removeListener('change', cb),
  get: () => _store
})

dispatcher.register(payload => {
  switch (payload.type) {
    case constants.ADD:
      _store.list = _store.list.map(i => i).concat(payload.obj)
      Store.emit('change')
      break
    case constants.REMOVE:
      _store.list = _store.list.filter(item => item.id !== payload.id)
      Store.emit('change')
      break
    default:
      return true
  }
})

export default Store
