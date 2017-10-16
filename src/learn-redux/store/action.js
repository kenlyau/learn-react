import constants from './constant.js'
export const add = text => ({
  type: constants.ADD,
  obj: {
    id: Date.now(),
    text: text
  }
})

export const remove = id => ({
  type: constants.REMOVE,
  id
})
