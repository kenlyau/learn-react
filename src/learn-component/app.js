import React from 'react'

function Foo () {
  const list = [0, 1, 2, 3, 4, 5, 6]
  return [
    <div style={{border: '1px solid blue'}} className="foo" key="a">foo</div>,
    <Bar key="b" list={list}/>
  ]
}
function Bar (props) {
  return (
    <ul style={{border: '1px solid green'}}>
      {props.list.map(i => <li key={i}>{i}</li>)}
    </ul>
  )
}

export default class App extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return <Foo />
  }
}
