import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../store'
export class Login extends React.Component {
  constructor (props) {
    super(props)
    this.handler = () => {
      this.props.dispatch(login('abc'))
    }
  }
  render () {
    return (
      this.props.auth.isAuth
        ? <Redirect to="/" />
        : <button onClick={this.handler}>Login</button>
    )
  }
}

export default connect(state => state)(Login)
