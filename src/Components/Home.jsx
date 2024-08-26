/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "../Components/WelcomePage";

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
              <Route path="/" element={<WelcomePage />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
