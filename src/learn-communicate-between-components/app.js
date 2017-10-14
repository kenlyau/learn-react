import React from 'react'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      parent: {
        name: 'parent component',
        number: 0
      },
      child1: {
        name: 'child component one',
        number: 0
      },
      child2: {
        name: 'child component two',
        number: 0
      }
    }

    this.changeChildNumber = () => {
      this.setState({
        child1: Object.assign({}, this.state.child1, {number: this.state.child1.number + 1})
      })
    }
    this.changeParentNumber = (number) => {
      this.setState({
        parent: Object.assign({}, this.state.parent, {number: this.state.parent.number + 1})
      })
    }
    this.changeChild2Number = () => {
      this.setState({
        child2: Object.assign({}, this.state.child2, {number: this.state.child2.number + 1})
      })
    }
  }
  render () {
    return (
      <div style={{border: '1px solid red', padding: '20px'}}>
        <h1>{this.state.parent.name}</h1>
        <p>parent number: {this.state.parent.number}</p>
        <button onClick={this.changeChildNumber}>change child1 number</button>
        <div>
          <Child1 changeChild2Number={this.changeChild2Number} data={this.state.child1} />
          <Child2 changeParentNumber={this.changeParentNumber} data={this.state.child2} />
        </div>
      </div>
    )
  }
}

export class Child1 extends React.Component {
  constructor (props) {
    super(props)
    this.changeNextNumber = () => {
      this.props.changeChild2Number()
    }
  }
  render () {
    return (
      <div style={{border: '1px solid blue', padding: '10px', marginTop: '20px'}}>
        <h2>{this.props.data.name}</h2>
        <p>child number: {this.props.data.number}</p>
        <button onClick={this.changeNextNumber}>change child2 number</button>
      </div>
    )
  }
}

export class Child2 extends React.Component {
  constructor (props) {
    super(props)
    this.changeParentNumber = () => {
      this.props.changeParentNumber()
    }
  }
  render () {
    return (
      <div style={{border: '1px solid green', padding: '10px', marginTop: '20px'}}>
        <h2>{this.props.data.name}</h2>
        <p>child number: {this.props.data.number}</p>
        <button onClick={this.changeParentNumber}>change parent number</button>
      </div>
    )
  }
}
