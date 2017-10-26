import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Main from './main'

export function PrivateRouter (props) {
  console.log(props.location.pathname)
  return (
    <Route path={props.location.pathname} render={() => (
      props.auth.isAuth
        ? <Main />
        : <Redirect to="/login" />
    )} />
  )
}

export default connect(state => state)(PrivateRouter)
