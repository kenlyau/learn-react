import {ReduceStore} from 'flux/utils'
import dispatcher from './dispatcher'
import {types} from './const'

dispatcher.register(payload => {
  console.log(payload)
})

class Store extends ReduceStore {
  constructor () {
    super(dispatcher)
  }
  getInitialState () {
    return []
  }
  reduce (state, action) {
    switch (action.type) {
      case types.ADD:
        return state.map(i => i).concat(action.obj)
      case types.REMOVE:
        return state.filter(item => item.id !== action.id)
      default:
        return state
    }
  }
}
export default new Store()
