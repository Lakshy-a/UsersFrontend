/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: [],
    imageUrl: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "category") {
      const updatedCategories = [...formData.category];
      if (updatedCategories.includes(value)) {
        updatedCategories.splice(updatedCategories.indexOf(value), 1);
      } else {
        updatedCategories.push(value);
      }
      setFormData({ ...formData, category: updatedCategories });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setSelectedImage(base64String);
        setFormData({ ...formData, imageUrl: base64String });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/manageProducts/addProduct",
        formData
      );
      alert("Product added successfully");
      navigate("/manageProducts/allProducts");
    } catch (error) {
      console.error(
        "Error adding product:",
        error.response ? error.response.data : error.message
      );
      alert("Error adding product");
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="app-container h-screen w-screen flex overflow-x-auto">
      <div className="sidebar h-full w-1/5">
        <Sidebar />
      </div>
      <div className="headerBar h-24 w-4/5">
        <Header />
        <div className="w-full h-fit bg-[#F2F7FB] pl-8 pr-8 pt-8">
          <div className="w-full h-16">
            <h2 className="text-2xl font-bold">Edit Blog</h2>
          </div>
          <div className="flex gap-4">
            {/* Blog details */}
            <div className="w-1/2 h-fit bg-white rounded-xl shadow-md p-8">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    rows={5}
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tags:
                  </label>
                  <div
                    className="text-sm font-medium text-gray-700 w-full h-10 border rounded-md pl-2 focus:outline-none cursor-pointer flex items-center mt-4"
                    onClick={toggleDropdown}
                  >
                    {formData.category.length === 0
                      ? "Categories"
                      : formData.category.join(", ")}
                  </div>
                  {isDropdownOpen && (
                    <div className="absolute z-10 mt-2 w-full bg-white border rounded-md shadow-lg">
                      <div className="p-2">
                        {["Clothes", "Shoes", "Electronics", "Furniture", "Miscellaneous"].map(
                          (option) => (
                            <label
                              key={option}
                              className="block cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                name="category"
                                value={option}
                                checked={formData.category.includes(option)}
                                onChange={handleChange}
                                className="mr-2"
                              />
                              {option}
                            </label>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Blog image */}
            <div className="imageUploader w-1/2 h-fit bg-white rounded-xl shadow-md pb-8">
              <div className="text-sm font-medium text-gray-700 p-8">
                Upload Image
              </div>
              <div className="h-56 w-full flex items-center justify-center">
                <label className="h-48 w-40 rounded-2xl border border-blue-600 border-dashed cursor-pointer flex flex-col justify-center items-center">
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Selected"
                      className="h-full w-full object-cover rounded-2xl"
                    />
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-4xl text-blue-600">
                        cloud_upload
                      </span>
                      <div className="w-full h-8 text-xs px-3 pt-1">
                        Drop your images here or{" "}
                        <span className="text-xs text-blue-600">
                          click to browse
                        </span>
                      </div>
                    </>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
              <div className="mt-4 mb-2 w-full h-fit flex justify-evenly">
                <button
                  type="submit"
                  className="py-2 px-6 rounded-xl bg-blue-600 text-white text-sm hover:bg-white hover:text-blue-600 border border-blue-600 font-semibold"
                  onClick={handleSubmit}
                >
                  Edit Blog
                </button>
                <button
                  type="submit"
                  className="py-2 px-6 rounded-xl text-sm text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white font-semibold"
                >
                  Save Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
