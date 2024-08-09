/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import DynamicTable from "./DynamicTable";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const navigate = useNavigate();

  const handleAddNew = () => {
    navigate("/manageProducts/addNewProduct"); // Replace with the route you want to navigate to
  };

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
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
      console.log(res.data);
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

  const handleEditProduct = () => {
    navigate("/manageProducts/updateProduct");
  }

  return (
    <div className="app-container h-screen w-screen flex overflow-x-auto">
      {/* sidebar */}
      <div className="sidebar h-fit  w-1/5 ">
        <Sidebar />
      </div>
      <div className="headerBar h-24 w-4/5 ">
        <Header />
        <div className="w-full h-fit bg-[#F2F7FB] pl-8 pr-8 pt-8 ">
          <div className="w-full h-16 ">
            <h2 className="text-2xl font-bold">Product List</h2>
          </div>
          <div className="w-full h-fit bg-white rounded-xl shadow-md pb-8">
            <div className="w-full h-10 flex items-center pl-4 gap-1">
              <span className="material-symbols-outlined text-lg">taunt</span>
              <div className="text-gray-400	text-sm">
                Tip search by Product ID: Each product is provided with a unique
                ID, which you can rely on to find the exact product you need.
              </div>
            </div>
            <div className="mt-4 w-full h-11 flex justify-between	pr-4">
              <div className="h-full w-fit flex ">
                <div className="text-gray-400	text-sm flex items-center justify-center h-full w-24">
                  Showing
                </div>
                <div className="text-black text-base flex items-center justify-center w-16 border rounded-xl px-2">
                  {" "}
                  <select className="border-none w-16 outline-none pr-4 rounded-xl text-sm">
                    <option value="option1">10</option>
                    <option value="option2">20</option>
                    <option value="option3">30</option>
                  </select>
                </div>
                <div className="text-gray-400	text-sm flex items-center justify-center h-full w-24">
                  entries
                </div>
                <div className="h-full w-96 flex items-center justify-center border py-2 pl-4 pr-2 rounded-lg ">
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="text-gray-400	text-sm outline-none w-full "
                  ></input>
                  <span className="material-symbols-outlined w-fit cursor-pointer">
                    search
                  </span>
                </div>
              </div>
              <div className="h-full w-48 border border-blue-600 flex items-center justify-center cursor-pointer text-sm rounded-xl text-blue-600 font-bold hover:bg-blue-600 hover:text-white hover:font-medium" onClick={handleAddNew}>
                <button>+ ADD NEW</button>
              </div>
            </div>
            <div className="overflow-x-auto overflow-y-auto">
              <div className="mt-2 mb-2">
                <div className="w-fit h-10 flex justify-between items-center gap-8">
                  <div className="h-full w-72 font-semibold px-6 py-3 text-md">
                    Product
                  </div>
                  <div className="h-full w-32 font-semibold px-6 py-3 text-md">
                    Product Id
                  </div>
                  <div className="h-full w-28 font-semibold px-6 py-3 text-md">
                    Price
                  </div>
                  <div className="h-full w-28 font-semibold px-6 py-3 text-md">
                    Category
                  </div>
                  {/* <div className="h-full w-28 font-semibold px-6 py-3 text-md">Sale</div>
                  <div className="h-full w-28 font-semibold px-6 py-3 text-md">Stock</div>*/}
                  <div className="h-full w-28 font-semibold px-6 py-3 text-md">Status</div> 
                  <div className="h-full w-28 font-semibold px-6 py-3 text-md">
                    Action
                  </div>
                </div>
              </div>
              <div className="product-container flex flex-wrap px-3">
                {products.map((product) => (
                  <div
                    key={product._id}
                    className="rounded-xl w-fit h-fit flex justify-between items-center gap-8 mb-3 py-1 hover:bg-gray-200 cursor-pointer"
                  >
                    <div className="h-full w-72 font-semibold px-6 text-md flex gap-4">
                      <img
                        src={product.productImage}
                        alt={product.title}
                        className="w-10 h-10"
                      />
                      <div className="h-10 whitespace-nowrap overflow-hidden text-ellipsis hover:text-blue-500 text-sm">
                        {product.title}
                      </div>
                    </div>
                    <div className="h-full w-32 font-semibold px-6 py-3 text-sm">
                      {product.id}
                    </div>
                    <div className="h-full w-28 font-semibold px-6 py-3 text-sm">
                      Rs. {product.price}
                    </div>
                    <div className="h-full w-28 font-semibold px-6 py-3 text-sm">
                      {product.category.name}
                    </div>
                    {/* <div className="h-full w-28 font-semibold px-6 py-3 text-md">Sale</div>
                  <div className="h-full w-28 font-semibold px-6 py-3 text-md">Stock</div>*/}
                  <div className="h-full w-28 font-semibold px-6 py-3 text-sm text-yellow-500">Draft</div> 
                    <div className="h-full w-40 font-semibold px-6 py-3 text-sm">
                      <span className="text-blue-400 hover:text-blue-600 material-symbols-outlined text-xl">
                        visibility
                      </span>
                      <span className="text-green-400 hover:text-green-600 ml-5 material-symbols-outlined text-xl" onClick={handleEditProduct}>
                        border_color
                      </span>
                      <span className="text-red-400 hover:text-red-500 ml-5 text-xl material-symbols-outlined">
                        delete
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              {/* pagination div */}
              <div className="flex justify-end mr-8 gap-2">
                <button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                  className="mr-2 ml-4 cursor-pointer text-white rounded font-semibold "
                >
                  <span className="text-2xl text-black hover:text-white h-10 w-10 rounded-full hover:bg-[#3482FD]  flex items-center justify-center material-symbols-outlined font-bold	material-symbols-outlined">
                    chevron_left
                  </span>
                </button>
                <span className="flex items-center justify-center bg-[#3482FD] text-white rounded-full h-10 w-10 font-semibold">
                  {page}
                </span>
                <button
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === 7}
                  className="ml-2 cursor-pointer text-white rounded font-semibold	"
                >
                  <span className="text-black text-2xl h-10 w-10 rounded-full hover:text-white flex items-center justify-center material-symbols-outlined font-bold	hover:bg-[#3482FD]">
                    chevron_right
                  </span>
                </button>
              </div>

              {/* sort div */}
              {/* <div>
                <label className="bg-[#3482FD] pl-3 pr-1 pt-1 pb-1 text-white rounded font-semibold border-2 border-black">
                  Sort By:
                  <select
                    value={sort}
                    onChange={handleSortChange}
                    className="bg-[#3482FD]"
                  >
                    <option value="createdAt">Created At</option>
                    <option value="price">Price</option>
                    <option value="name">Name</option>
                  </select>
                </label>
                <button
                  onClick={handleOrderChange}
                  className="bg-[#3482FD] pl-3 pr-3 pt-1 pb-1 text-white rounded font-semibold border-2 border-black ml-2"
                >
                  Order: {asc ? "Ascending" : "Descending"}
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
