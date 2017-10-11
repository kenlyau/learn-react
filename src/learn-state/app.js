import React from 'react'


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'react component state'
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <pre>{JSON.stringify(this.state, null, 4)}</pre>
            </div>
        )
    }
}