/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const AllUsers = () => {
  const navigate = useNavigate();
  
  // Sample data for products
  const [products] = useState([
    {
      _id: "1",
      productImage: "image_url_1",
      title: "User 1",
      id: "101",
      price: "1000",
      category: { name: "Category 1" },
      status: "Inactive",
    },
    {
      _id: "2",
      productImage: "image_url_2",
      title: "User 2",
      id: "102",
      price: "1500",
      category: { name: "Category 2" },
      status: "Active",
    },
    // Add more products here
  ]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [filterStatus, setFilterStatus] = useState("All");

  const handleAddNew = () => {
    navigate("/createUser");
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value, 10));
    setPage(1); // Reset to the first page whenever the limit changes
  };

  const handleEditUser = (event) => {
    const productId = event.currentTarget.getAttribute("data-id");
    console.log("Updating product with ID:", productId);
    navigate(`/editUser`);
  };

  const handleDeleteClick = (event) => {
    const productId = event.currentTarget.getAttribute("data-id");
    console.log("Deleting product with ID:", productId);
    // Add logic to handle deletion if needed
  };

  const handleFilterChange = (event) => {
    setFilterStatus(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    if (filterStatus === "All") return true;
    return product.status === filterStatus;
  });

  return (
    <div className="app-container h-screen w-screen flex overflow-x-auto">
      {/* Sidebar */}
      <div className="sidebar h-fit w-1/5">
        <Sidebar />
      </div>
      <div className="headerBar h-24 w-4/5">
        <Header />
        <div className="w-full h-fit bg-[#F2F7FB] pl-8 pr-8 pt-8">
          <div className="w-full h-16">
            <h2 className="text-2xl font-bold">All Users</h2>
          </div>
          <div className="w-full h-fit bg-white rounded-xl shadow-md pb-8">
            <div className="mt-4 w-full h-11 flex justify-between pr-4 m-4">
              <div className="h-full w-fit flex items-center gap-4">
                <select
                  value={filterStatus}
                  onChange={handleFilterChange}
                  className="h-full w-32 border border-gray-300 rounded-md px-2 py-1 text-sm"
                >
                  <option value="All">All Users</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div
                className="h-full w-48 border border-blue-600 flex items-center justify-center cursor-pointer text-sm rounded-xl text-blue-600 font-bold hover:bg-blue-600 hover:text-white hover:font-medium"
                onClick={handleAddNew}
              >
                <button>+ ADD USER</button>
              </div>
            </div>
            <div className="overflow-x-auto overflow-y-auto">
              <div className="mt-2 mb-2">
                <div className="w-fit h-10 flex items-center gap-8">
                  <div className="h-full w-72 font-semibold pl-12 py-3 text-md">
                    All Users
                  </div>
                  <div className="h-full w-72 font-semibold px-6 py-3 text-md">
                    User Status
                  </div>
                  <div className="h-full w-72 font-semibold px-12 py-3 text-md">
                    Action
                  </div>
                </div>
              </div>
              <div className="product-container flex flex-wrap px-3">
                {filteredProducts.map((product) => (
                  <div
                    key={product._id}
                    className="rounded-xl w-fit h-fit flex justify-between items-center gap-8 mb-3 py-1 hover:bg-gray-200 cursor-pointer"
                  >
                    <div className="h-full w-72 font-semibold px-6 text-md flex gap-4">
                      <div className="h-10 whitespace-nowrap overflow-hidden text-ellipsis hover:text-blue-500 text-sm">
                        {product.title}
                      </div>
                    </div>                    
                    <div className={`h-full w-72 font-semibold px-6 py-3 text-sm ${product.status === "Inactive" ? "text-red-500" : "text-green-500"}`}>
                      {product.status}
                    </div>
                    <div className="h-full w-40 font-semibold px-6 py-3 text-sm">
                      {/* view product icon */}
                      <span className="text-blue-400 hover:text-blue-600 material-symbols-outlined text-xl">
                        visibility
                      </span>
                      {/* edit icon */}
                      <span 
                        className="text-green-400 hover:text-green-600 ml-5 material-symbols-outlined text-xl" 
                        data-id={product._id} 
                        onClick={handleEditUser}
                      >
                        border_color
                      </span>
                      {/* delete icon */}
                      <span 
                        className="text-red-400 hover:text-red-500 ml-5 text-xl material-symbols-outlined" 
                        data-id={product._id} 
                        onClick={handleDeleteClick}
                      >
                        delete
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end mr-8 gap-2 mt-8">
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className="mr-2 ml-4 cursor-pointer text-white rounded font-semibold"
              >
                <span className="text-2xl text-black hover:text-white h-10 w-10 rounded-full hover:bg-[#3482FD] flex items-center justify-center material-symbols-outlined font-bold">
                  chevron_left
                </span>
              </button>
              <span className="flex items-center justify-center bg-[#3482FD] text-white rounded-full h-10 w-10 font-semibold">
                {page}
              </span>
              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === 7}
                className="ml-2 cursor-pointer text-white rounded font-semibold"
              >
                <span className="text-black text-2xl h-10 w-10 rounded-full hover:text-white flex items-center justify-center material-symbols-outlined font-bold hover:bg-[#3482FD]">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
