/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

function UpdateProduct() {
    const navigate = useNavigate();

    const [productId, setProductId] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        imageUrl: ''
    });

    const handleIdChange = (e) => {
        const { value } = e.target;
        setProductId(value);
    };

    const fetchProductDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/manageProducts/getProduct/${productId}`);
            const product = response.data;
            setFormData({
                name: product.name,
                description: product.description,
                price: product.price,
                category: product.category,
                imageUrl: product.imageUrl
            });
        } catch (error) {
            console.error('Error fetching product details:', error.response ? error.response.data : error.message);
            alert('Error fetching product details');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting form data:', formData);

        try {
            const response = await axios.put(`http://localhost:3000/manageProducts/updateProduct/:${formData.productId}`, { ...formData, id: productId });
            console.log('Response:', response.data);
            alert('Product updated successfully');
        } catch (error) {
            console.error('Error updating product:', error.response ? error.response.data : error.message);
            alert('Error updating product');
        }
        navigate('/catalog');
    };

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
            <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-1">
            <h2 className="text-2xl font-bold mb-4">Update Product</h2>
            <div className="mb-4">
                <label htmlFor="productId" className="block text-sm font-medium text-gray-700">Product ID</label>
                <input
                    type="text"
                    id="productId"
                    name="productId"
                    value={productId}
                    onChange={handleIdChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                />
                <button
                    onClick={fetchProductDetails}
                    className="mt-2 w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Fetch Product Details
                </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
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
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Update Product
                    </button>
                </div>
            </form>
        </div>
          </div>
        </div>
      </div>

      {/* Add Ecommerce content here */}
    </div>
       
    );
}

export default UpdateProduct;
