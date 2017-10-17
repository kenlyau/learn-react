import constants from './constant.js'
export const add = obj => ({
  type: constants.ADD,
  obj: {
    id: obj.id,
    text: obj.text
  }
})

export const remove = id => ({
  type: constants.REMOVE,
  id
})
