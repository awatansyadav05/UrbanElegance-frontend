import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const PopularProducts = ({AddToCart}) => {
  const [PopularProducts, setPopularProducts]=useState([])

  useEffect(()=>{
    const PopularProductsFetch = async()=>{
      try{
        const res= await axios("https://dummyjson.com/carts/1");
        setPopularProducts(res.data.products)
        console.log(res.data.products);

      }
      catch(error){
        toast.error(error.message)
      }
    };
    PopularProductsFetch()
  },[])
  return (
    <>
      <div className='mt-6 w-full lg:w-[30%] mx-auto justify-center'>
        <h2 className='text-center text-4xl text-slate-500 font-bold font-mono mt-10'>Popular Products</h2>
      </div>
      <section className='mx-auto flex justify-center'>
      <div className="container mx-auto px-5 py-8 " >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {
          PopularProducts.filter((item,index) => index !==1 && index !==3 )
          .map((popularItem)=>(
            <div className="p-4 " key={popularItem.id} >
            <a className="block relative rounded overflow-hidden " key={popularItem}>
              <img alt="ecommerce" className="object-cover object-center w-full h-48 md:h-64" src={popularItem.thumbnail} />
            </a>
            <div className="mt-4">
              
              <h2 className="text-gray-900 title-font text-lg font-medium">{popularItem.title}</h2>
              <p className="mt-1 text-2xl font-semibold ">{popularItem.price}  ₹</p>
              <button className='text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-800 dark:hover:bg-slate-800 dark:focus:ring-gray-800 ' onClick={()=> AddToCart (popularItem)} >
                Add to Cart
              </button>
            </div>
          </div>
          

          ))
        }
         
        
         
         
        </div>
      </div>
      </section>
    </>
  );
};

export default PopularProducts;
