'use client'
import React, { useActionState } from 'react'
import { greetFullName } from './question'

const initialState ={
    message: ''
}

function page() {
    const [ state, formAction] = useActionState(greetFullName, initialState)
  return (
    <div>
      <form action={formAction} className="space-y-4 p-4 max-w-md mx-auto">
      <input
        name="firstName"
        placeholder="Enter your firstname"
        className="border p-2 w-full"
       
      />

        <input
          
          name="lastName"
          placeholder="Enter your lastname"
          className="border p-2 w-full"

        />

        <button type="submit" className="bg-blue-600 text-white px-4 p-2 rounded">Submit</button>
            <p className="text-green-600 text-center p-4 mt-4 font-medium border">{state.message}</p>
      </form>
    </div>
  )
}

export default page