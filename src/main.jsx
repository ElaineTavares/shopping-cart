import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home.jsx'
import ShoppingCart from './routes/ShoppingCart.jsx'
import CompraEfetuada from './routes/CompraEfetuada.jsx'
import CartProvider from './contexts/cart.jsx'



const router = createBrowserRouter([
  {
    element: <App/>,
    children: [   
      {
        element: <Home/>,
        path: "/"
      },
      {
        element: <ShoppingCart/>,
        path: "/shoppingcart"
      },
      {
        element: <CompraEfetuada/>,
        path: "/compraefetuada"
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router}/>
    </CartProvider>  
  </StrictMode>,
)
