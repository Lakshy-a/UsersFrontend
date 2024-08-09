/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import axios from "axios";

function Furniture() {
    const fetchFurnitures = async () => {
        try {
          const res = await axios.get(
            "http://localhost:3000/categories/furniture"
          );
          console.log(res);
          return res.data;
        } catch (error) {
          console.log(error);
        }
      };

      const [furnitures, setFurnitures] = useState([]);

  useEffect(() => {
    const getAllFurnitures = async () => {
      const furnituresFromAPI = await fetchFurnitures();
      setFurnitures(furnituresFromAPI);
    };

    getAllFurnitures();
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
              Products in Furniture Category
            </div>
            <div className="product-container flex flex-wrap w-full ">
              {furnitures.map((furniture) => (
                <div
                  key={furniture._id}
                  className="product box-border	w-1/3 p-2 "
                >
                  <img
                    src={furniture.productImage}
                    alt={furniture.title}
                    className="w-72"
                  />
                  <p className="text-lg">
                    <b>Title :</b> {furniture.title}
                  </p>
                  <p className="text-lg">
                    <b>Price :</b> Rs.{furniture.price}
                  </p>
                  <p className="text-lg text-justify">
                    <b>Decsription :</b> {furniture.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Furniture;
