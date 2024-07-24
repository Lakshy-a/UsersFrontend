/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '../assets/logo.png'

function OpenSideBar() {
  return (
    <div className='mainSideBar h-screen w-64 bg-white '>
        <div className='flex justify-between items-center border-dashed h-24 w-full '>
                <div className='flex justify-center items-center h-full w-40'><img src={logo}/></div>
                <span className="flex justify-center items-center h-full w-16 material-symbols-outlined cursor-pointer text-gray-400	">menu_open</span>
        </div>
        <div className='border-dashed border-2 border-light-blue-500 h-auto w-full'>abc</div>
        <div className='border-dashed border-2 border-light-blue-500 h-auto w-full'>abc</div>
        <div className='border-dashed border-2 border-light-blue-500 h-auto w-full'>abc</div>
        <div className='border-dashed border-2 border-light-blue-500 h-auto w-full'>abc</div>
        <div className='border-dashed border-2 border-light-blue-500 h-auto w-full'>abc</div>
        <div className='border-dashed border-2 border-light-blue-500 h-auto w-full'>abc</div>
    </div>
  )
}

export default OpenSideBar