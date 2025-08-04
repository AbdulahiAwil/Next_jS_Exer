import React, { Suspense } from 'react'
import AboutPage from '../static/page'

function Page() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
      <Suspense fallback={<div className="bg-gray-200 text-gray-500">Loading...</div>}>
        <AboutPage />
      </Suspense>
    </div>
  </div>
  )
}

export default Page