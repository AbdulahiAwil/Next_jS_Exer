'use client'

import { useActionState } from "react";
import { greet } from "./form/action";

const initialState ={
  success: false,
  message: '',
  error: ''
}

export default function Home() {
  const [ state, formAction] =useActionState(greet, initialState);

  return (
    <div>
      <form action={formAction} className="space-y-4 p-4 max-w-md mx-auto">
      <input
        name="email"
        placeholder="Enter your email"
        className="border p-2 w-full"
       
      />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="border p-2 w-full"

        />

        <button type="submit" className="bg-blue-600 text-white px-4 p-2 rounded">Submit</button>
        {state.success && (
        <p className="text-green-600 mt-4 font-medium">{state.message}</p>
      )}
      {!state.success && state.error && (
        <p className="text-red-600 mt-4 font-medium">{state.error}</p>
      )}
      </form>
    </div>
  );
}
