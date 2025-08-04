import React from 'react'

export default function date() {
    const data = new Date().toLocaleTimeString();
  return (
    <div>
        <h1>
            {data}
        </h1>
    </div>
  )
}

