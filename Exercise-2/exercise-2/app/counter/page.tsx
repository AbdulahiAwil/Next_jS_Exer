"use client"
import React, { useState } from 'react'

function Page() {

    const [count, setCount] = useState(0);
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1>Counter</h1>
        <p>{count}</p>
        <button className='bg-blue-500  text-white p-2 rounded-md mx-2' onClick={() => setCount(count + 1)}>Increment</button>
        <button className='bg-red-500 text-white p-2 rounded-md mx-2' disabled={count === 0} onClick={() => setCount(count - 1)}>Decrement</button>
        <button className='bg-green-500 text-white p-2 rounded-md mx-2' onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Page