import React from 'react'
import {shallow} from 'enzyme'
import renderer from 'react-test-renderer'
import App from './app'

describe('测试App的DOM元素', () => {
  test('text hello', () => {
    const app = shallow(<App />)
    expect(app.text()).toEqual('hello')
  })
  test('text hello world', () => {
    const app = shallow(<App hello="hello world"/>)
    expect(app.text()).toEqual('hello world')
  })
  test('app snapshots test', () => {
    const app = renderer.create(<App />).toJSON()
    expect(app).toMatchSnapshot()
  })
})
