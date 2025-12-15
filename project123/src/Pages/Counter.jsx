import React, { useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("Initial message...") // ✔ added

  return (
    <div>
      <p>{message}</p>
      <p>Count: {count}</p>

      <button 
        className='bg-blue-500 rounded p-1 mt-10' 
        onClick={() => {
          setCount(count + 1)
          setMessage("Button clicked!") // ✔ update message
        }}
      >
        click
      </button>
    </div>
  )
}

export default Counter
