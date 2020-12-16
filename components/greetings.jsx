import React, { useState } from 'react'

export default () => {
  const [greet, setGreet] = useState('')
  return (
    <div className="page">
      <div className="title">To whom am I speaking?</div>
      <input type="text" name="name" onChange={event => setGreet(`It's nice to meet you ${event.target.value}`)} />
      <div className="greet">{greet}</div>
    </div>
  )
}
