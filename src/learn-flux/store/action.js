import {types} from './const'
import dispatcher from './dispatcher'

const Actions = {
  add (obj) {
    dispatcher.dispatch({
      type: types.ADD,
      obj
    })
  },
  remove (id) {
    dispatcher.dispatch({
      type: types.REMOVE,
      id
    })
  }
}

export default Actions
