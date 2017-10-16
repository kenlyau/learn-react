import dispatcher from './dispatcher.js'
import constants from './constant.js'

const actions = {
  add (obj) {
    dispatcher.dispatch({
      type: constants.ADD,
      obj
    })
  },
  remove (id) {
    dispatcher.dispatch({
      type: constants.REMOVE,
      id
    })
  }
}
export default actions
