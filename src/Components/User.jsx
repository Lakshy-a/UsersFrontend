/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import axios from "axios";

const User = () => {
  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/getAllUsers/getAllUsers"
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      const productsFromAPI = await fetchUsers();
      setUsers(productsFromAPI);
    };

    getAllUsers();
  }, []);

  return (
    <div className="app-container h-screen w-screen flex">
      <div className="sidebar h-full w-1/5">
        <Sidebar />
      </div>
      <div className="headerBar h-24 w-4/5">
        <Header />
        <div className="product-container flex flex-wrap">

          {users.map((user) => (
            <div key={user._id} className="product box-border	w-1/4 p-2">
              <h1 className="text-lg font-bold	">Name: {user.username}</h1>
              <p className="m-0"><b>Email</b>: {user.email}</p>
              {/* <p className="m-0"><b>Price</b>: ${user.price}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
