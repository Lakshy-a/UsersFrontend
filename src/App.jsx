/* eslint-disable no-unused-vars */
// src/App.js

import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import Ecommerce from "./Components/Ecommerce";
import Category from "./Components/Category";
import Roles from "./Components/Roles";
import Order from "./Components/Order";
import User from "./Components/User";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import ForgotPassword from "./Components/ForgotPassword";
import WelcomePage from "./Components/WelcomePage";
import Home from "./Components/Home";
import ManageProducts from "./Components/ManageProducts";
import AddProduct from "./Components/AddProduct";
import RemoveProduct from "./Components/RemoveProduct";
import UpdateProduct from "./Components/UpdateProduct";
import AllProducts from "./Components/AllProducts";
import Clothes from "./Components/Clothes";
import Shoes from "./Components/Shoes";
import Furniture from "./Components/Furniture";
import Electronics from "./Components/Electronics";
import Miscellaneous from "./Components/Miscellaneous";
import AddProductNew from "./Components/AddProductNew";

const componentMap = {
  Clothes,
  Shoes,
  Furniture,
  Electronics,
  Miscellaneous
  // Add other mappings
};

const DynamicComponent = () => {
  const { name } = useParams();
  const Component = componentMap[name];
  return Component ? <Component /> : <div>Component not found</div>;
};

function App() {
  return (
    <>
    
      <BrowserRouter>
        <div className="app-container">
          <div className="main-content">
            <div className="content">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/home/*" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/manageProducts" element={<ManageProducts />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                <Route path="/category" element={<Category />} />
                <Route path="/order" element={<Order />} />
                <Route path="/user" element={<User />} />
                <Route path="/roles" element={<Roles />} />
                <Route path="/manageProducts/addproduct" element={<AddProduct />} />
                <Route path="/manageProducts/removeProduct" element={<RemoveProduct />} />
                <Route path="/manageProducts/updateproduct/:id" element={<UpdateProduct />} />
                <Route path="/manageProducts/allProducts" element={<AllProducts />} />
                <Route path="/category/:name" element={<DynamicComponent />} />
                <Route path="/manageProducts/addNewProduct" element={<AddProductNew />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
