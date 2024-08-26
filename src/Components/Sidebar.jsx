/* eslint-disable no-unused-vars */
// src/components/Sidebar.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown menu and handle navigation
  const handleNavigation = () => {
    navigate('/allUsers')
  };

  return (
    <div className="w-64 h-screen text-black">
      {/* logo */}
      <div className="flex justify-between items-center">
        <img className="w-48" src={logo} alt="Logo" />
      </div>

      {/* sidebar menu */}
      <ul className="px-3 py-5">
        <div 
          className="clickableContainer flex cursor-pointer items-center"
          onClick={handleNavigation}
        >
          <span className="w-1/5 flex justify-center items-center mx-2 material-symbols-outlined">
            grid_view
          </span>
          <div className="w-4/5 flex justify-between items-center">
            <li className="py-4 text-lg">Manage Users</li>
            <span className="material-symbols-outlined cursor-pointer w-1/5 flex justify-center items-center mx-2">
              {isDropdownOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
            </span>
          </div>
        </div>
        {/* {isDropdownOpen && (
          <div className="mt-2 bg-white border border-gray-300 rounded shadow-lg">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link to="/allUsers">All Users</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link to="/createBlog">Create User</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link to="/blog/post3">Edit User</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link to="/blog/post4">Post 4</Link>
              </li>
            </ul>
          </div>
        )} */}
      </ul>
    </div>
  );
};

export default Sidebar;
