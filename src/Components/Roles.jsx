/* eslint-disable no-unused-vars */
// src/components/Attributes.js
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Attributes = () => {
  return (
    <div>
      <div>
        <div className="app-container h-screen w-screen flex">
          <div className="sidebar h-full w-1/5">
            <Sidebar />
          </div>
          <div className="headerBar h-24 w-4/5 ">
            <div>
              <Header />
            </div>
            <h2 className="text-xl font-bold mb-4">Roles</h2>
            {/* Add Attributes content here */}
          </div>
        </div>
      </div>

      {/* Add Ecommerce content here */}
    </div>
  );
};

export default Attributes;
