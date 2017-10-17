import * as actions from './action.js'
import constants from './constant.js'

describe('actions', () => {
  test('action to add a item', () => {
    const text = 'finish docs'
    const id = Date.now()
    const obj = {id, text}
    const expectedAction = {
      type: constants.ADD,
      obj
    }
    expect(actions.add(obj)).toEqual(expectedAction)
  })
})
