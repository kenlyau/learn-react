import React from 'react'

export class List extends React.Component {
  constructor (props) {
    super(props)
  }
  componentWillMount () {

  }
  render () {
    return (
      <ul>
        {this.props.list.map(item => <Item key={item.id} data={item} onRemove={this.props.onRemove}/>)}
      </ul>
    )
  }
}
export class Item extends React.Component {
  constructor (props) {
    super(props)
    this.remove = () => {
      this.props.onRemove(props.data.id)
    }
  }
  render () {
    return (
      <li>{this.props.data.id}--{this.props.data.text}&nbsp;<button onClick={this.remove}>x</button></li>
    )
  }
}
export class Edit extends React.Component {
  constructor (props) {
    super(props)
    this.submit = ($ev) => {
      if ($ev.keyCode === 13) {
        this.props.onAdd($ev.target.value)
        this.refs.input.value = ''
      }
    }
  }
  render () {
    return <input ref="input" onKeyUp={this.submit} type="text" placeholder="please type" />
  }
}

export default function App (props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <Edit {...props}/>
      <List {...props}/>
    </div>
  )
}
