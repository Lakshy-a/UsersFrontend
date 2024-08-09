/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import axios from "axios";

function Miscellaneous() {
  const fetchMiscellaneous = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/categories/miscellaneous"
      );
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const [miscellaneous, setMiscellaneous] = useState([]);

  useEffect(() => {
    const getAllMiscellaneous = async () => {
      const miscellaneousFromAPI = await fetchMiscellaneous();
      setMiscellaneous(miscellaneousFromAPI);
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
          <div className="headerBar h-24 w-5/6 ">
            <div>
              <Header />
            </div>
            <div className="mt-4 mb-4 w-full text-center text-3xl font-semibold underline decoration-dotted">
              Products in Miscelleaneous Category
            </div>
            <div className="product-container flex flex-wrap w-full ">
              {miscellaneous.map((miscellaneou) => (
                <div
                  key={miscellaneou._id}
                  className="product box-border	w-1/3 p-2 "
                >
                  <img
                    src={miscellaneou.productImage}
                    alt={miscellaneou.title}
                    className="w-72"
                  />
                  <p className="text-lg">
                    <b>Title :</b> {miscellaneou.title}
                  </p>
                  <p className="text-lg">
                    <b>Price :</b> Rs.{miscellaneou.price}
                  </p>
                  <p className="text-lg text-justify">
                    <b>Decsription :</b> {miscellaneou.description}
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

export default Miscellaneous;
