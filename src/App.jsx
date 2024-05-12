import RootLayout from "./RootLayout";
import AllProducts from "./components/AllProducts/AllProducts";
import Cart from "./pages/Cart/Cart"
import Home from "./pages/Home/Home"
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
//import HeroSection from "./components/Herosection/HeroSection";
function App() {

  //cart updated
  const [cart, setCart] =useState([])
  const AddToCart=(products) =>{
    const isProductexist = cart.find((findItem )=> findItem.id === products.id)

    if(isProductexist){
      const upDateCart = cart.map((item)=> (
        item.id === products.id? {...item, quantity:item.quantity+1}:item
      ))
      setCart(upDateCart);
    }
    else{
      setCart([...cart, {...products, quantity:1}])
    }
    console.log(cart);
  }

  //cart increase
  const handleInc= (id) =>{
    const incQuality =cart.map((item)=> (
      item.id ===id ? {...item, quantity:item.quantity+1}:item))
      setCart(incQuality)
  }

    //cart decrease
  const handleDec=(id) =>{
    const decQuality= cart.map((item)=> (
      item.id===id && item.quantity>1 ? {...item, quantity:item.quantity-1}:item
    ))
    setCart(decQuality)
  }

  const handleRemove=(id) => {
    const updateByFilter = cart.filter((filterItem )=>filterItem.id !==id);
    setCart(updateByFilter);
  }



  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'cart',
          element: <Cart cart={cart} handleDec={handleDec} handleInc= {handleInc} handleRemove={handleRemove} />
        },
        {
          path:'allproducts',
          element: <AllProducts AddToCart={AddToCart}/>
        },
        {
          path:'login',
          element: <Login/>
        },
        {
          path:'signup',
          element: <Signup/>
        },
        {
          path: 'home',
          element: <Home />
        },
        {
          path: 'home',
          element: <Navbar cart={cart}/>
        },
        {
          path: '/',
          element: <Footer/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routes} />


    </>
  )
}

export default App
