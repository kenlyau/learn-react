import React from 'react'

export class Child extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      time: 1
    }
    this.interval = setInterval(() => this.setState({time: this.state.time + 1}), 1000)
  }
  componentWillUnmount () {
    clearInterval(this.interval)
  }
  render () {
    return <div style={{border: '1px solid #666600', padding: '20px'}}>{this.props.data.name}<p>{this.state.time}</p></div>
  }
}
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'react component state',
      show: true,
      child: {
        name: 'react child compoent'
      }
    }
    this.toggle = () => {
      this.setState({show: !this.state.show})
    }
  }
  render () {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.toggle}>Toggle show child</button>
        <pre>{JSON.stringify(this.state, null, 4)}</pre>
        {this.state.show ? <Child data={this.state.child}></Child> : ''}
      </div>
    )
  }
}
