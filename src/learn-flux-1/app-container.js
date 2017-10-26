import {Container} from 'flux/utils'
import store from './store/store.js'
import actions from './store/action.js'
import App from './app.js'

const getStores = () => {
  return [store]
}

function getState () {
  return {
    title: 'flux view container',
    list: store.getState(),
    onAdd: actions.add,
    onRemove: actions.remove
  }
}
export default Container.createFunctional(App, getStores, getState)
