/* eslint-disable no-unused-vars */
// FormComponent.jsx
import React, { useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function AddProductNew() {
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
            <div className="w-full h-fit bg-[#F2F7FB] pl-8 pr-8 pt-8 ">
              <div className="w-full h-16 ">
                <h2 className="text-2xl font-bold">Add Product</h2>
              </div>
              <div className="flex gap-4">
                {/* product details */}
                <div className="w-1/2 h-fit bg-white rounded-xl shadow-md p-8">
                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Title <span className="text-red-600 text-md">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        // value={formData.name}
                        // onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                      />
                      <div className="text-xs mt-1 text-gray-500">Do not exceed 20 characters when entering the product name.</div>
                    </div>
                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description <span className="text-red-600 text-md">*</span>
                      </label>
                      <textarea rows={5}
                        type="text"
                        id="description"
                        name="description"
                        // value={formData.description}
                        // onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                      />
                      <div className="text-xs mt-1 text-gray-500">Do not exceed 100 characters when entering the product name.

                        </div>
                    </div>
                    <div>
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Price <span className="text-red-600 text-md">*</span>
                      </label>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        // value={formData.price}
                        // onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div className="flex gap-2 items-center">
                      <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Category:
                      </label>
                      <select className="text-sm font-medium text-gray-700 w-full h-10 border rounded-md pl-2 focus:outline-none">
                        <option>Clothes</option>
                        <option>Shoes</option>
                        <option>Electronics</option>
                        <option>Furniture</option>
                        <option>Miscellaneous</option>
                      </select>
                      {/* <input
                        type="text"
                        id="category"
                        name="category"
                        // value={formData.category}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                      /> */}
                    </div>
                    {/* <div>
                      <label
                        htmlFor="imageUrl"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Image URL
                      </label>
                      <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={""}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                      />
                    </div> */}
                    <div>
                      <button
                        type="submit"
                        className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Add Product
                      </button>
                    </div>
                  </form>
                </div>

                {/* product image */}
                <div className="w-1/2 h-fit bg-white rounded-xl shadow-md pb-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductNew;
