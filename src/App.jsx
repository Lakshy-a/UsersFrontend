/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import ForgotPassword from "./Components/ForgotPassword";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import CreateUser from "./Components/CreateUser";
import EditUser from "./Components/EditUser";
import AllUsers from "./Components/AllUsers";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="main-content">
          <div className="content">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/home/*" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/createUser" element={<CreateUser />} />
              <Route path="/editUser" element={<EditUser />} />
              <Route path="/allUsers" element={<AllUsers />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
