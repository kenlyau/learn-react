import React from 'react'
import ReactDOM from 'react-dom'

const foldersContext = require.context('./', true, /\.html$/)
const learns = foldersContext
  .keys()
  .filter(item => item.indexOf('learn-') > -1)
  .map(item => {
    let tmp = item.split('/')
    return tmp[1] ? tmp[1] : ''
  })

class App extends React.Component {
  render () {
    const lis = learns.map((item, i) => <li key={i}><a href={'./' + item + '.html'}>{item}</a></li>)
    return (
      <ul>
        {lis}
      </ul>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'))
