/* eslint-disable no-unused-vars */
// src/components/Sidebar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import openMenu from "../assets/menuOpen.png";

const Sidebar = () => {
  const [dropdowns, setDropdowns] = useState({
    manageProducts: false,
  });

  const toggleDropdown = (name) => {
    setDropdowns((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    // the main div
    <div className="w-64 h-screen text-black">
      {/* logo */}
      <div className="flex justify-between items-center">
        <img className="w-48" src={logo} />
      </div>

      {/* sidebar menu */}
      <ul className="px-3 py-5">
        {/* dashboard */}
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

        {/* manage products */}
        <div className="flex flex-col">
          <div className="flex">
            <span
              className="w-1/5 flex justify-center items-center mx-2 material-symbols-outlined cursor-pointer"
              onClick={() => toggleDropdown("manageProducts")}
            >
              database
            </span>
            <div className="w-4/5 flex justify-between items-center">
              <li
                className="py-4 text-lg"
                onClick={() => toggleDropdown("manageProducts")}
              >
                <Link to="/manageProducts">Manage Products</Link>
              </li>
              <span
                className="material-symbols-outlined cursor-pointer"
                onClick={() => toggleDropdown("manageProducts")}
              >
                keyboard_arrow_down
              </span>
            </div>
          </div>
          {dropdowns.manageProducts && (
            <div className="mt-2 bg-white border border-gray-300 rounded shadow-lg">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link to="/manageProducts/addProduct">Add Products</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link to="/manageProducts/removeProduct">
                    Remove Products
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link to="/manageProducts/updateProduct">
                    Update Products
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link to="/manageProducts/allProducts">Product List</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* ecommerce */}
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="flex w-full">
              <span className="w-1/5 flex justify-center items-center mx-2 material-symbols-outlined">
                shopping_cart
              </span>
              <div className="w-4/5 flex justify-between items-center">
                <li className="py-4 text-lg">
                  <Link to="/ecommerce">Ecommerce</Link>
                </li>
                <span
                  className="material-symbols-outlined cursor-pointer"
                  onClick={() => toggleDropdown("ecommerce")}
                >
                  keyboard_arrow_down
                </span>
              </div>
            </div>
            <div className="w-full h-56 bg-black hidden"></div>
          </div>
        </div>

        {/* category */}
        <div className="flex flex-col">
          <div className="flex">
            <span className="w-1/5 flex justify-center items-center mx-2 material-symbols-outlined">
              category
            </span>
            <div className="w-4/5 flex justify-between items-center">
              <li className="py-4 text-lg">
                <Link to="/category">Categories</Link>
              </li>
              <span
                className="material-symbols-outlined cursor-pointer"
                onClick={() => toggleDropdown("category")}
              >
                keyboard_arrow_down
              </span>
            </div>
          </div>
        </div>

        {/* orders */}
        <div className="flex flex-col">
          <div className="flex">
            <span className="w-1/5 flex justify-center items-center mx-2 material-symbols-outlined">
              orders
            </span>
            <div className="w-4/5 flex justify-between items-center">
              <li className="py-4 text-lg">
                <Link to="/order">Orders</Link>
              </li>
              <span
                className="material-symbols-outlined cursor-pointer"
                onClick={() => toggleDropdown("orders")}
              >
                keyboard_arrow_down
              </span>
            </div>
          </div>
        </div>

        {/* users */}
        <div className="flex flex-col">
          <div className="flex">
            <span className="w-1/5 flex justify-center items-center mx-2 material-symbols-outlined">
              person
            </span>
            <div className="w-4/5 flex justify-between items-center">
              <li className="py-4 text-lg">
                <Link to="/user">Users</Link>
              </li>
              <span
                className="material-symbols-outlined cursor-pointer"
                onClick={() => toggleDropdown("users")}
              >
                keyboard_arrow_down
              </span>
            </div>
          </div>
        </div>

        {/* roles */}
        <div className="flex flex-col">
          <div className="flex">
            <span className="w-1/5 flex justify-center items-center mx-2 material-symbols-outlined">
              person_add
            </span>
            <div className="w-4/5 flex justify-between items-center">
              <li className="py-4 text-lg">
                <Link to="/roles">Roles</Link>
              </li>
              <span
                className="material-symbols-outlined cursor-pointer"
                onClick={() => toggleDropdown("roles")}
              >
                keyboard_arrow_down
              </span>
            </div>
          </div>
        </div>

        {/* all products */}
        {/* <div className="flex flex-col">
          <div className="flex">
            <span className="w-1/5 flex justify-center items-center mx-2 material-symbols-outlined">
              box
            </span>
            <div className="w-4/5 flex justify-between items-center">
              <li className="py-4 text-lg">
                <Link to="/allProducts">All Products</Link>
              </li>
              <span
                className="material-symbols-outlined cursor-pointer"
                onClick={() => toggleDropdown("allProducts")}
              >
                keyboard_arrow_down
              </span>
            </div>
          </div>
        </div> */}
      </ul>
    </div>
  );
};

export default Sidebar;
