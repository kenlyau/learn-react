import React from 'react'
import { Route } from 'react-router-dom'
import Item from './item'

export default class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      topics: [
        {
          id: 1,
          title: 'rendering with react',
          content: 'rendering with react'
        },
        {
          id: 2,
          title: 'components',
          content: 'react components'
        },
        {
          id: 3,
          title: 'props vs state',
          content: 'what is success props vs state'
        }
      ]
    }
    this.redirect = (id) => {
      this.props.history.push(`${this.props.match.url}/${id}`)
    }
  }
  render () {
    return (
      <div>
        <h2>LIST</h2>
        <ul>
          {this.state.topics.map(topic => (
            <li key={topic.id}>
              <a onClick={() => this.redirect(topic.id)} href="javascript:;">{topic.title}</a>
            </li>
          ))}
        </ul>
        <Route path={`${this.props.match.url}/:id`} render={props => <Item topics={this.state.topics} {...props}/>} />
        <Route exact path={this.props.match.url} render={() => (
          <h3>Please select a topic.</h3>
        )}/>
      </div>
    )
  }
}
