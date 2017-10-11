import React from 'react'

function Foo() {
    const list = [0,1,2,3,4,5,6]
    return [
    <div className="foo" key="a">foo</div>,
    <Bar key="b" list={list}/>
    
    ]
}
function Bar(props) {
    return (
        <ul>
            {props.list.map(i => <li key={i}>{i}</li>)}
        </ul>
    )
}

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <Foo />
    }
}