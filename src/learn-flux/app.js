import React from 'react'
import store from './store/store'
import actions from './store/action'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hello: props.hello ? props.hello : 'hello'
    }
    actions.add({
      a: 2
    })
    console.log(store.getState())
  }
  render () {
    return (
      <h1>{this.state.hello}</h1>
    )
  }
}
