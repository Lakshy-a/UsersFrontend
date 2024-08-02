/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Catalog() {
    const navigate = useNavigate();

    const handleAddProduct = () => {
        navigate('/addProduct');
      };

      const handleRemoveProduct = () => {
        navigate('/removeProduct');
      };

      const handleUpdateProduct = () => {
        navigate('/updateProduct');
      };
  return (
    <>
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='w-3/5 h-3/5 bg-black flex justify-center items-center gap-8'>
                <div className='bg-white h-fit w-fit cursor-pointer	font-bold text-xl p-3'onClick={handleAddProduct}>ADD PRODUCT</div>
                <div className='bg-white h-fit w-fit cursor-pointer font-bold p-3 text-xl' onClick={handleRemoveProduct}>REMOVE PRODUCT</div>
                <div className='bg-white h-fit w-fit cursor-pointer	font-bold p-3 text-xl' onClick={handleUpdateProduct}>UPDATE PRODUCT</div>
            </div>
        </div>
    </>
  )
}

export default Catalog