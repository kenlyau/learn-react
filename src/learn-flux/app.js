import React from 'react'
import Store from './store/store.js'
import actions from './store/action.js'

export class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
  }
  componentWillMount () {
    Store.on('change', () => {
      this.setState(Store.get())
    })
  }
  render () {
    return (
      <ul>
        {this.state.list.map(item => <Item key={item.id} data={item} />)}
      </ul>
    )
  }
}
export class Item extends React.Component {
  constructor (props) {
    super(props)
    this.remove = () => {
      actions.remove(this.props.data.id)
    }
  }
  render () {
    return (
      <li>{this.props.data.id}--{this.props.data.text}&nbsp;<button onClick={this.remove}>x</button></li>
    )
  }
}
export class Edit extends React.Component {
  constructor (props) {
    super(props)
    this.submit = ($ev) => {
      if ($ev.keyCode === 13) {
        let val = $ev.target.value
        actions.add({id: Date.now(), text: val})
        this.refs.input.value = ''
      }
    }
  }
  render () {
    return <input ref="input" onKeyUp={this.submit} type="text" placeholder="please type" />
  }
}

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hello: props.hello ? props.hello : 'hello'
    }
  }
  componentWillMount () {
    this.setState(Object.assign({}, this.state, Store.get()))
  }
  render () {
    return (
      <div>
        <h1>{this.state.hello}</h1>
        <Edit />
        <List />
      </div>
    )
  }
}
