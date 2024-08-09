/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import axios from 'axios';

function Shoes() {
    const fetchShoes = async () => {
        try {
            const res = await axios.get("http://localhost:3000/categories/shoes");
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    const [shoes, setshoes] = useState([]);

    useEffect(() => {
      const getAllShoes = async () => {
        const shoesFromAPI = await fetchShoes();
        setshoes(shoesFromAPI);
      };

      getAllShoes();
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
              Products in Shoes Category
            </div>
            <div className="product-container flex flex-wrap w-full ">
              {shoes.map((shoe) => (
                <div
                  key={shoe._id}
                  className="product box-border	w-1/3 p-2 "
                >
                  <img
                    src={shoe.productImage}
                    alt={shoe.title}
                    className="w-72"
                  />
                  <p className="text-lg">
                    <b>Title :</b> {shoe.title}
                  </p>
                  <p className="text-lg">
                    <b>Price :</b> Rs.{shoe.price}
                  </p>
                  <p className="text-lg text-justify">
                    <b>Decsription :</b> {shoe.description}
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

export default Shoes