/* eslint-disable no-unused-vars */
// src/components/Dashboard.js
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen">
      <div className="sidebar w-full lg:w-1/5 h-auto lg:h-full bg-gray-100">
        <Sidebar />
      </div>
      <div className="w-full lg:w-4/5 flex flex-col">
        <Header />
        <div className="p-4 flex-grow">
          <h2 className="text-xl font-bold mb-4">
            Welcome to the Admin Dashboard
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">Total Sales</h3>
              <p className="text-2xl">34,945</p>
              <span className="text-green-500">1.56%</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">Total Income</h3>
              <p className="text-2xl">$37,802</p>
              <span className="text-red-500">1.56%</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">Orders Paid</h3>
              <p className="text-2xl">34,945</p>
              <span className="text-gray-500">0.00%</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">Total Visitor</h3>
              <p className="text-2xl">34,945</p>
              <span className="text-blue-500">1.56%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
