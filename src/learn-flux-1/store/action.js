import constants from './constant.js'
import dispatcher from './dispatcher.js'

const actions = {
  add (text) {
    dispatcher.dispatch({
      type: constants.ADD,
      obj: {
        text: text,
        id: Date.now()
      }
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
