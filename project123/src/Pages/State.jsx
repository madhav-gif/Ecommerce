import React, { useState } from 'react'

const State = () => {
    const [count,setCount] =useState(0);
  return (
    <div>
      <p>{count}</p>
      <button className='bg-blue-500 rounded p-1 mt-20' onClick={()=>setCount(count+1)}>click me</button>
    </div>
  )
}

export default State
