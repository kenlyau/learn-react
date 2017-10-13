import React from 'react'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hello: props.hello ? props.hello : 'hello'
    }
  }
  render () {
    return (
      <h1>{this.state.hello}</h1>
    )
  }
}
