import RootLayout from "./RootLayout";
import Cart from "./pages/Cart/Cart"
import Home from "./pages/Home/Home"
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
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
