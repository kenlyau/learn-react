import {combineReducers} from 'redux'
import constants from './constant.js'
export const list = (state = [], action) => {
  switch (action.type) {
    case constants.ADD:
      return state.map(i => i).concat(action.obj)
    case constants.REMOVE:
      return state.filter(i => i.id !== action.id)
    default:
      return state
  }
}
const appStore = combineReducers({
  list
})
export default appStore
