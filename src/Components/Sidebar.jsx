/* eslint-disable no-unused-vars */
// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import openMenu from "../assets/menuOpen.png";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen text-black ">
      <div className="flex justify-between items-center">
        <img className="w-48" src={logo} />
      </div>
      <ul className="px-3 py-5">
        <div className="flex">
          <span className="w-1/5 flex justify-center items-center mx-2 material-symbols-outlined">
            grid_view
          </span>
          <div className="w-4/5 flex justify-between items-center">
            <li className="py-4 text-lg">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <span className="material-symbols-outlined cursor-pointer">
              keyboard_arrow_down
            </span>
          </div>
        </div>
        <div className="flex">
          <span className="w-1/5 flex justify-center items-center mx-2 material-symbols-outlined">database</span>
          <div className="w-4/5 flex justify-between items-center">
            <li className="py-4 text-lg">
              <Link to="/catalog">Catalog</Link>
            </li>
            <span className="material-symbols-outlined cursor-pointer">
              keyboard_arrow_down
            </span>
          </div>
        </div>
        <div className="flex">
          <span className="w-1/5 flex justify-center items-center mx-2 material-symbols-outlined">
            shopping_cart
          </span>
          <div className="w-4/5 flex justify-between items-center">
            <li className="py-4 text-lg">
              <Link to="/ecommerce">Ecommerce</Link>
            </li>
            <span className="material-symbols-outlined cursor-pointer">
              keyboard_arrow_down
            </span>
          </div>
        </div>
        <div className="flex">
          <span className="w-1/5 flex justify-center items-center mx-2 material-symbols-outlined">
            category
          </span>
          <div className="w-4/5 flex justify-between items-center">
            <li className="py-4 text-lg">
              <Link to="/category">Category</Link>
            </li>
            <span className="material-symbols-outlined cursor-pointer">
              keyboard_arrow_down
            </span>
          </div>
        </div>
        <div className="flex">
          <span className="w-1/5 flex justify-center items-center mx-2  material-symbols-outlined">
            orders
          </span>
          <div className="w-4/5 flex justify-between items-center">
            <li className="py-4 text-lg">
              <Link to="/order">Orders</Link>
            </li>
            <span className="material-symbols-outlined cursor-pointer">
              keyboard_arrow_down
            </span>
          </div>
        </div>
        <div className="flex">
          <span className="w-1/5 flex justify-center items-center mx-2 material-symbols-outlined">
            person
          </span>
          <div className="w-4/5 flex justify-between items-center">
            <li className="py-4 text-lg">
              <Link to="/user">User</Link>
            </li>
            <span className="material-symbols-outlined cursor-pointer">
              keyboard_arrow_down
            </span>
          </div>
        </div>
        <div className="flex">
          <span className="w-1/5 flex justify-center items-center mx-2 material-symbols-outlined">
            person_add
          </span>
          <div className="w-4/5 flex justify-between items-center">
            <li className="py-4 text-lg">
              <Link to="/roles">Roles</Link>
            </li>
            <span className="material-symbols-outlined cursor-pointer">
              keyboard_arrow_down
            </span>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
