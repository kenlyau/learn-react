import React from 'react'
import {connect} from 'react-redux'
import { getUserRequest } from './store/user'

export function View (props) {
  if (!props.user) {
    return ''
  }
  if (props.error) {
    return <h1>{props.error.message}</h1>
  }
  return (
    <ul>
      {Object.keys(props.user).map(key => (<li key={key}>
        <span>{key}</span>&nbsp;{props.user[key]}
      </li>))}
    </ul>
  )
}

export function Search (props) {
  return (
    <input type="text" onKeyUp={e => props.handleKeyword(e)} />
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hello: props.hello ? props.hello : 'hello'
    }
    this.handleKeyword = (e) => {
      if (e.keyCode !== 13) {
        return false
      }
      this.props.dispatch(getUserRequest(e.target.value))
    }
  }
  render () {
    return (
      <div>
        <Search handleKeyword={this.handleKeyword} />
        <View user={this.props.user.currentUser} error={this.props.user.error}/>
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
