import React from 'react'
import { connect } from 'react-redux'
import 'react-transitions/dist/animations.css'

class Home extends React.Component {
  componentDidMount () {
    this.props.get()
  }
  render () {
    return (
      <div className="container">
        <br />
        <div className="row">
          <div className="col-md-12">
            <span>{this.props.user.username}</span>&nbsp;
            <button className="btn btn-default" onClick={this.props.logout}>退出</button>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-md-12">
            <div className="list-group">
              {this.props.posts.map(post => (
                <div key={post.objectId} style={{border: 0}} className="list-group-item">
                  <span className="badge" onClick={() => this.props.delete(post)}>x</span>
                  {post.content}
                </div>
              ))}
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-md-12">
            <input type="text" className="form-control" onKeyUp={e => this.props.add(e)} />
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.user.profile,
    posts: state.posts
  }
}
const mapDispatch = ({user, posts}) => {
  return {
    logout: user.logout,
    add: e => {
      if (e.keyCode === 13 && e.target.value) {
        posts.addAsync({content: e.target.value})
        e.target.value = ''
      }
    },
    delete: posts.deleteAsync,
    get: posts.getAsync
  }
}
export default connect(mapState, mapDispatch)(Home)
