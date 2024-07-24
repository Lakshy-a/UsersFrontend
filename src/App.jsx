/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// // src/App.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import Ecommerce from "./Components/Ecommerce";
import Category from "./Components/Category";
import Roles from "./Components/Roles";
import Order from "./Components/Order";
import User from "./Components/User";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import ForgotPassword from "./Components/ForgotPassword";
import WelcomePage from "./Components/WelcomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <div className="main-content">
            <div className="content">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
    // <BrowserRouter>
    //   <div className="app-container h-screen w-screen flex">
    //     <div className="sidebar h-full w-1/5">
    //       <Sidebar />
    //     </div>
    //     <div className="headerBar h-24 w-4/5 ">
    //       <div>
    //         <Header />
    //       </div>
    //       <div className="p-4">
    //         <Routes>
    //           <Route path="/" element={<WelcomePage/>} />
    //           <Route path="/dashboard" element={<Dashboard />} />
    //           <Route path="/ecommerce" element={<Ecommerce />} />
    //           <Route path="/category" element={<Category />} />
    //           <Route path="/order" element={<Order />} />
    //           <Route path="/user" element={<User />} />
    //           <Route path="/roles" element={<Roles />} />
    //           <Route path="/login" element={<Login />} />
    //           <Route path="/signup" element={<Signup />} />
    //           <Route path="/forgot-password" element={<ForgotPassword />} />
    //         </Routes>
    //       </div>
    //     </div>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
