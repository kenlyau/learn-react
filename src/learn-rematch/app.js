import React from 'react'
import { connect } from 'react-redux'
import Login from './login'
import Register from './register'
import Home from './home'
const App = props => {
  if (props.status === 'login') {
    return <Login />
  } else if (props.status === 'register') {
    return <Register />
  }
  return <Home />
}
const mapState = state => ({
  status: state.user.status
})
export default connect(mapState)(App)
