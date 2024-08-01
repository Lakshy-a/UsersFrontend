/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from '../Components/WelcomePage'
import Dashboard  from './Dashboard';
import Ecommerce from './Ecommerce';
import Order from './Order';
import Category from './Category';
import User from './User';
import Roles from './Roles'

function Home() {
  return (
    <div>
        <div className="app-container h-screen w-screen flex">
        <div className="sidebar h-full w-1/5">
          <Sidebar />
        </div>
        <div className="headerBar h-24 w-4/5 ">
          <div>
            <Header />
          </div>
          <div className="p-4">
            <Routes>
              <Route path="/" element={<WelcomePage/>} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/category" element={<Category />} />
              <Route path="/order" element={<Order />} />
              <Route path="/user" element={<User />} />
              <Route path="/roles" element={<Roles />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home