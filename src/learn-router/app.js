import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './components/login'
import Main from './components/main'

export default class App extends React.Component {
  render () {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Main} />
      </Switch>
    )
  }
}
