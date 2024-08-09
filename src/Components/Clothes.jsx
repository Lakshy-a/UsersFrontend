/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import axios from 'axios';

function Clothes() {
    const fetchClothes = async () =>{
        try {
            const res = await axios.get("http://localhost:3000/categories/clothes");
            // console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    const [clothes, setClothes] = useState([]);

    useEffect(() => {
        const getAllClothes = async () => {
            const clothesFromAPI = await fetchClothes();
            setClothes(clothesFromAPI);
        };

        getAllClothes();
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
              Products in Colthes Category
            </div>
            <div className="product-container flex flex-wrap w-full ">
              {clothes.map((cloth) => (
                <div
                  key={cloth._id}
                  className="product box-border	w-1/3 p-2 "
                >
                  <img
                    src={cloth.productImage}
                    alt={cloth.title}
                    className="w-72"
                  />
                  <p className="text-lg">
                    <b>Title :</b> {cloth.title}
                  </p>
                  <p className="text-lg">
                    <b>Price :</b> Rs.{cloth.price}
                  </p>
                  <p className="text-lg text-justify">
                    <b>Decsription :</b> {cloth.description}
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

export default Clothes