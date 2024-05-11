import React, { useEffect, useState } from 'react'
//import Layout from '../Layout/Layout'
import axios from 'axios'

const AllProducts = () => {
  const [allProducts, setAllProducts]= useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectProducts, setSelectProducts] = useState("")

  useEffect(()=>{
    const allProducts = async () => {
      const res= await axios ("https://dummyjson.com/products/1");
      setAllProducts(res.data)
      console.log(res.data);

    };
    allProducts();
  },[]);

  useEffect(()=>{
    const getAllProductsCategory= async() => {
      try{
        const res = await axios("https://dummyjson.com/products/categories");
        setAllCategory(res.data);

      }
      catch (error){
          console.log(error);
      }
     
    };
    getAllProductsCategory();
  },[])

  useEffect(()=>{
    const getAllProducts= async() => {
      try{
        if(selectProducts){
          const res = await axios(`https://dummyjson.com/products/category/${selectProducts}`);
          setProducts(res.data.products);

        }
     
    }
      catch (error){
          console.log(error);
      }
    };
    getAllProducts();
  },[selectProducts]);
  const filterProducts= (allProducts)=> {
    setSelectProducts(allProducts);
  }
  return (
    <>
    {/*Product category section */}
      <div className='flex gap-3 flex-wrap'>
      <select onChange={(e) => filterProducts(e.target.value)}>
      <option>Filter By Category</option>
      {allCategory.filter((filterItem )=> 
      [ "tops",  "womens-shoes", "womens-dresses",  "mens-shirts", "mens-shoes",
  "mens-watches", "womens-watches",
  "womens-bags",].includes(filterItem))
      .map((allProducts, index)=> (
        <option value={allProducts}>
          {allProducts}
        </option>
        
      ))}
      </select>
      </div>
      {/* Products section */}
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
        <div className='flex gap-4'>
          { products.map((item )=>(
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full border">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.thumbnail}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            Title: {item.title}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Rating: {item.rating}
          </h2>
          <p className="mt-1">Price: Rs.{item.price}</p>
        </div>
        </div>
            ))
          }
      </div>

        </div>
      </section>

      <div className='flex flex-wrap gap-4 justify-center'>
        {
          allProducts.map((AllItems,index) => (
            <div className='mt-4' key={index}>
            <img src={AllItems.thumbnail} alt='' className='object-cover object-center block'/>
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            Title: {AllItems.title}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Rating: {AllItems.rating}
          </h2>
          <p className="mt-1">Price: Rs.{AllItems.price}</p>
            </div>
          ))
        }
      </div>
      
     
     
    </>
  )
}

export default AllProducts
