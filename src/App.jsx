import RootLayout from "./RootLayout";
import AllProducts from "./components/AllProducts/AllProducts";
import Cart from "./pages/Cart/Cart"
import Home from "./pages/Home/Home"
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: 'home',
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
