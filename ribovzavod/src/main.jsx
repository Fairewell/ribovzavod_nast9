import React from 'react'
import {App, Products, CartPage }from './routes'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client'; 
import NotFoundPage from './routes/Page404.jsx';

const router = createBrowserRouter([
  {
    path: "*",
    element: <App/>,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/main",
    element: <App/>,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/products",
    element: <Products/>,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/cart",
    element: <CartPage/>,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <App/>,
    errorElement: <NotFoundPage />,
  },
  {
    errorElement: <NotFoundPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
