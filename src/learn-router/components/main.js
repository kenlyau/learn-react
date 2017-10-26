import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect, Switch, Route } from 'react-router-dom'
import { logout } from '../store'
import Home from './home'
import About from './about'
import List from './list'

export function Main (props) {
  return (
    props.auth.isAuth
      ? (
        <div>
          <header>
            <button onClick={() => props.dispatch(logout())} style={{float: 'right'}}>Logout</button>
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/list">list</Link>
              </li>
            </ul>
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/list" component={List} />
          </Switch>
        </div>
      )
      : <Redirect to ="/login" />
  )
}

export default connect(state => state)(Main)
