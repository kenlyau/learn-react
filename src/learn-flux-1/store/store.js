import {ReduceStore} from 'flux/utils'
import dispatcher from './dispatcher.js'
import constants from './constant.js'
class Store extends ReduceStore {
  constructor () {
    super(dispatcher)
  }
  getInitialState () {
    return []
  }
  reduce (state, action) {
    // 派发 action
    switch (action.type) {
      case constants.ADD:
        return state.map(i => i).concat(action.obj)
      case constants.REMOVE:
        return state.filter(i => i.id !== action.id)
      default:
        return state
    }
  }
}

export default new Store()
