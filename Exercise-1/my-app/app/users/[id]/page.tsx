import React from 'react'
interface pageProps {
    params: {
        id: string
    }
}

function page({params}: pageProps) {
  return (
    <div className='m-4 text-center text-2xl font-bold'>
        welcome to <span className='text-blue-500'> {params.id}</span>
    </div>
  )
}

export default page