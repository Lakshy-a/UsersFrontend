/* eslint-disable no-unused-vars */
// src/components/Category.js
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import axios from "axios";

const Category = () => {
  const fetchCategories = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/categories/categories"
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getAllCategories = async () => {
      const categoriesFromAPI = await fetchCategories();
      setCategories(categoriesFromAPI);
    };

    getAllCategories();
  }, []);

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

            <h1 className="w-full flex justify-center items-center h-fit pt-4 pb-2 text-4xl font-bold">
              All Categories
            </h1>
            <div className="product-container flex flex-wrap w-full ">
              {categories.map((category) => (
                <div key={category._id} className="product box-border	w-1/3 p-2 ">
                  <p className="text-lg font-bold	"></p>
                  <img src={category.image} alt={category} className="w-72 cursor-pointer" />
                  <p className="text-center text-2xl font-bold cursor-pointer">{category.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
