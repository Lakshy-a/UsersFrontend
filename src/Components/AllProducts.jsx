/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import axios from "axios";
// import './AllProducts.css';

const AllProducts = () => {
  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/manageProducts/getAllProducts"
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsFromAPI = await fetchProducts();
      setProducts(productsFromAPI);
    };

    getProducts();
  }, []);

  return (
    <div className="app-container h-screen w-screen flex">
      <div className="sidebar h-full w-1/5">
        <Sidebar />
      </div>
      <div className="headerBar h-24 w-4/5">
        <Header />
        <div className="product-container flex flex-wrap">

          {products.map((product) => (
            <div key={product._id} className="product box-border	w-1/4 p-2">
              <img src={product.imageUrl} alt={product.name} className="max-w-full h-auto"/>
              <h1 className="text-lg font-bold	">{product.name}</h1>
              <p className="m-0"><b>Description</b>: {product.description}</p>
              <p className="m-0"><b>Price</b>: ${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
