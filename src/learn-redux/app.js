import React from 'react'
import {connect} from 'react-redux'
import {add, remove} from './store/action.js'

// 容器组件
class Edit extends React.Component {
  constructor (props) {
    super(props)
    this.keyup = $ev => {
      if ($ev.keyCode === 13) {
        this.props.dispatch(add({
          id: Date.now(),
          text: $ev.target.value
        }))
        this.refs.input.value = ''
      }
    }
  }
  render () {
    return <input ref="input" onKeyUp={this.keyup} type="text" placeholder="typing" />
  }
}
const EditComponent = connect()(Edit)

class List extends React.Component {
  constructor (props) {
    super(props)
    this.remove = (id) => {
      this.props.dispatch(remove(id))
    }
  }
  render () {
    return (
      <ul>
        {this.props.list.map(item => (
          <li key={item.id}>{item.id}--{item.text}&nbsp;<button onClick={() => this.remove(item.id)}>x</button></li>
        ))}
      </ul>
    )
  }
}
const mapStateToProps = state => ({
  list: state.list
})
const ListComponent = connect(mapStateToProps)(List)

// 展示组件
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hello: props.hello ? props.hello : 'hello'
    }
  }
  render () {
    return (
      <div>
        <h1>{this.state.hello}</h1>
        <EditComponent />
        <ListComponent />
      </div>
    )
  }
}
