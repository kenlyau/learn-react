import React from 'react'
import { connect } from 'react-redux'

let userInput
let passInput

const Login = props => {
  const userLogin = () => {
    props.login({
      username: userInput.value,
      password: passInput.value
    })
  }
  return (
    <div className="modal show">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">登录</h4>
          </div>
          <div className="modal-body">
            <div className="input-group">
              <span className="input-group-addon">username</span>
              <input type="text" ref={ el => { userInput = el } } className="form-control" />
            </div>
            <br />
            <div className="input-group">
              <span className="input-group-addon">password</span>
              <input type="password" ref={ el => { passInput = el } } className="form-control" />
            </div>
            <br />
            <br />
            <div className="text-right">
              <button type="button" className="btn btn-success" onClick={() => userLogin() }>登录</button>
              <button type="button" className="btn btn-default" style={{'marginLeft': 30}}>注册</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatch = ({user}) => {
  return user
}
export default connect(null, mapDispatch)(Login)
