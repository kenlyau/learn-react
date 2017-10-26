import React from 'react'

export default function Item (props) {
  const id = props.match.params.id
  const topic = props.topics.find(item => item.id.toString() === id)
  return (
    <div>
      <h1>{id}</h1>
      <p>{topic.content}</p>
    </div>
  )
}
