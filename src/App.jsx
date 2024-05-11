import RootLayout from "./RootLayout";
import AllProducts from "./components/AllProducts/AllProducts";
import Cart from "./pages/Cart/Cart"
import Home from "./pages/Home/Home"
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
//import HeroSection from "./components/Herosection/HeroSection";
function App() {
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
          element: <Cart />
        },
        {
          path:'allproducts',
          element: <AllProducts/>
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
