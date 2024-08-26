/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

function Blog() {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen">
      <div className="sidebar w-full lg:w-1/5 h-auto lg:h-full bg-gray-100">
        <Sidebar />
      </div>
      <div className="w-full lg:w-4/5 flex flex-col">
        <Header />
        <div className="p-4 flex-grow">
          <h2 className="text-xl font-bold mb-4">
            Blogs...
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Blog