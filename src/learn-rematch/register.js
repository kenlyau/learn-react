import React from 'react'

export default class Register extends React.Component {
  render () {
    return (
      <div className="modal show">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">注册</h4>
            </div>
            <div className="modal-body">
              <div className="input-group">
                <span className="input-group-addon">username</span>
                <input type="text" className="form-control" />
              </div>
              <br />
              <div className="input-group">
                <span className="input-group-addon">password</span>
                <input type="password" className="form-control" />
              </div>
              <br />
              <br />
              <div className="text-right">
                <button type="button" className="btn btn-success">注册</button>
                <button type="button" className="btn btn-default" style={{'marginLeft': 30}}>取消</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
