/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import axios from "axios";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState("createdAt");
  const [asc, setAsc] = useState(true);

  const fetchProducts = async (page, limit, sort, asc) => {
    try {
      const res = await axios.get(
        "http://localhost:3000/manageProducts/getAllProducts",
        {
          params: {
            page,
            limit,
            sort,
            asc: asc ? 1 : -1,
          },
        }
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };  

  useEffect(() => {
    const getProducts = async () => {
      const productsFromAPI = await fetchProducts(page, limit, sort, asc);
      setProducts(productsFromAPI);
    };

    getProducts();
  }, [page, limit, sort, asc]);

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handleOrderChange = () => {
    setAsc(!asc);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="app-container h-screen w-screen flex">
      <div className="sidebar h-full w-1/5">
        <Sidebar />
      </div>
      <div className="headerBar h-24 w-4/5">
        <Header />
        <div className="sorting-controls flex justify-between p-4">
          <div>
            <label className="bg-[#3482FD] pl-3 pr-1 pt-1 pb-1 text-white rounded font-semibold border-2 border-black">
              Sort By:
              <select value={sort} onChange={handleSortChange} className="bg-[#3482FD]">
                <option value="createdAt">Created At</option>
                <option value="price">Price</option>
                <option value="name">Name</option>
                {/* Add more sorting options as needed */}
              </select>
            </label>
            <button onClick={handleOrderChange} className="bg-[#3482FD] pl-3 pr-3 pt-1 pb-1 text-white rounded font-semibold border-2 border-black ml-2">
              Order: {asc ? "Ascending" : "Descending"}
            </button>
          </div>
          <div>
            <button onClick={() => handlePageChange(page - 1)} disabled={page === 1} className="mr-4 cursor-pointer pl-3 pr-3 pt-1 pb-1 bg-black text-white rounded font-semibold	">
              Previous
            </button>
            <span className="bg-[#3482FD] pl-3 pr-3 pt-1 pb-1 text-white border-2 border-black rounded font-semibold	">Page : {page}</span>
            <button onClick={() => handlePageChange(page + 1)} disabled={page === 7} className="mr-4 ml-4 cursor-pointer pl-3 pr-3 pt-1 pb-1 bg-black text-white rounded font-semibold	">Next</button>
          </div>
        </div>
        <div className="product-container flex flex-wrap">
          {products.map((product) => (
            <div key={product._id} className="product box-border w-1/4 p-2">
              <img src={product.imageUrl} alt={product.name} className="max-w-full h-auto" />
              <h1 className="text-lg font-bold">{product.name}</h1>
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
