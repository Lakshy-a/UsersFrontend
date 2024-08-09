/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import axios from "axios";

function Electronics() {
    const fetchElectronics = async () => {
        try {
          const res = await axios.get(
            "http://localhost:3000/categories/electronics"
          );
          console.log(res);
          return res.data;
        } catch (error) {
          console.log(error);
        }
      };

      const [electronics, setElectronics] = useState([]);

      useEffect(() => {
        const getAllMiscellaneous = async () => {
          const electronicsFromAPI = await fetchElectronics();
          setElectronics(electronicsFromAPI);
        };
    
        getAllMiscellaneous();
      }, []);

  return (
    <div>
    <div>
      <div className="app-container h-screen w-screen flex overflow-x-auto">
        <div className="sidebar h-full w-1/5">
          <Sidebar />
        </div>
        <div className="headerBar h-24 w-4/5 ">
          <div>
            <Header />
          </div>
          <div className="mt-4 mb-4 w-full text-center text-3xl font-semibold underline decoration-dotted">
              Products in Electronics Category
            </div>
            <div className="product-container flex flex-wrap w-full ">
              {electronics.map((electronic) => (
                <div
                  key={electronic._id}
                  className="product box-border	w-1/3 p-2 "
                >
                  <img
                    src={electronic.productImage}
                    alt={electronic.title}
                    className="w-72"
                  />
                  <p className="text-lg">
                    <b>Title :</b> {electronic.title}
                  </p>
                  <p className="text-lg">
                    <b>Price :</b> Rs.{electronic.price}
                  </p>
                  <p className="text-lg text-justify">
                    <b>Decsription :</b> {electronic.description}
                  </p>
                </div>
              ))}
            </div>
         
        </div>
      </div>
    </div>
  </div>
  )
}

export default Electronics