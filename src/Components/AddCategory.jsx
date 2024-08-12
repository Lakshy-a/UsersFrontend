/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

function AddCategory() {
  return (
    <div>
      <div>
        <div className="app-container h-screen w-screen flex overflow-x-auto">
          <div className="sidebar h-full w-1/5">
            <Sidebar />
          </div>
          <div className="headerBar h-24 w-4/5 ">
            <div>
              <Header />
            </div>

            <h1 className="w-full flex justify-center items-center h-fit pt-4 pb-2 text-4xl font-bold">
              Add Category
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddCategory