import {list} from './reducer.js'
import constants from './constant.js'

describe('test reducer', () => {
  test('inital state', () => {
    expect(
      list(undefined, {})
    ).toEqual([])
  })
  test('handle add', () => {
    const obj = {
      id: Date.now(),
      text: 'run test'
    }
    expect(
      list([], {
        type: constants.ADD,
        obj
      })
    ).toEqual([obj])
  })
})
