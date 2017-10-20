import React from 'react'
import {connect} from 'react-redux'

export const List = (props) => {
  return (
    <ul>
      {props.data ? props.data.map(item => <li key={item.id}><strong>{item.name}</strong><p>{item.url}</p></li>) : ''}
    </ul>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    repos: state.repos
  }
}

export class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hello: props.hello ? props.hello : 'hello'
    }
    this.getRepos = () => {
      this.props.dispatch({type: 'GET_REPOS_SYNC'})
    }
  }
  render () {
    return (
      <div>
        <button onClick={this.getRepos}>{this.props.repos.pending === 'pending' ? 'loading repos' : 'get repos'}</button>
        <List data={this.props.repos.data} />
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
