import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllProducts = ({AddToCart}) => {
  const [allProducts, setAllProducts] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectProducts, setSelectProducts] = useState("");
  const [showProduct, setShowProducts] = useState(false); // Corrected the string to boolean
  const [searchItem , setSearchItem] = useState("");

  useEffect(() => {
    const fetchAllProducts = async () => { // Renamed function to avoid conflicts
      try {
        const res = await axios("https://dummyjson.com/products/category/tops");
       // console.log(res);
        setAllProducts(res.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllProducts(); // Corrected function call
  }, []);

  const filterProducts = (selectedCategory) => {
    setSelectProducts(selectedCategory);
    setShowProducts(true);
  };

  useEffect(() => {
    const getAllProductsCategory = async () => {
      try {
        const res = await axios("https://dummyjson.com/products/categories");
        setAllCategory(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProductsCategory();
  }, []);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        if (selectProducts) {
          const res = await axios(`https://dummyjson.com/products/category/${selectProducts}`);
          setProducts(res.data.products);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, [selectProducts]);

  const handleSearchItem=(e) =>{
    const query = e.target.value;
    setSearchItem(query); 
}
const filteredProducts = products.filter(item =>
  item.title.toLowerCase().includes(searchItem.toLowerCase())
);

  return (
    <>
      {/* Product category section */}
      <div className='relative '>
      <img className="object-cover w-full object-center h-[200px] mt-5" src="https://www2.hm.com/content/dam/global_campaigns/season_09/beauty/7929/7929-banner-3x1.jpeg" draggable="false"/>
      <div className='absolute inset-0 flex items-center justify-center'>
        <h2 className='text-white font-bold text-4xl'>
          Collections
        </h2>
      </div>
      </div>
      <div className='flex gap-3 flex-wrap justify-center mt-3 text-2xl'>
        <select onChange={(e) => filterProducts(e.target.value)}>
          <option>Filter By Category</option>
          {allCategory.filter((filterItem) =>
            ["tops", "womens-shoes", "womens-dresses", "mens-shirts", "mens-shoes",
              "mens-watches", "womens-watches",
              "womens-bags"].includes(filterItem))
            .map((allProducts, index) => (
              <option key={index} value={allProducts}>
                {allProducts}
              </option>
            ))}
        </select>
      </div>
      <div className='text-center mt-3 text-2xl'> 
            <input placeholder='search item' className='border-4 px-2 py-2' onChange={handleSearchItem} /  >
      </div>

      {/* Products section */}
      {showProduct ? (
        <section className='text-gray-600 body-font'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='flex gap-4'>
              {products.map((item, index) => (
                <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full border">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.thumbnail} />
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
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div className='flex flex-wrap gap-4 justify-center'>
          {allProducts.map((AllItems, index) => (
            <div className='mt-4' key={index}>
              <img src={AllItems.thumbnail} alt='' className='object-cover object-center block' />
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                Title: {AllItems.title}
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Rating: {AllItems.rating}
              </h2>
              <p className="mt-1">Price: Rs.{AllItems.price}</p>
              <button className='text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-800 dark:hover:bg-slate-800 dark:focus:ring-gray-800 ' onClick={()=> AddToCart(AllItems)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AllProducts;

