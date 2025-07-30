import React from 'react'
interface Blogparams {
    slug: string[]
}
function page({params}: {params: Blogparams}) {
  return (
    <div>
        <h1>Blog Page</h1>
        <p className='text-2xl font-bold text-underline text-rose-300'> {params.slug.join('/')}</p>
    </div>
  )
}

export default page