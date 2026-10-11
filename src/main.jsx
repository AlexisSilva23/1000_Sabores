import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from 'react-router-dom';
import {routes} from './routes.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { CartProvider } from './context/cartContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={routes}/>
    </CartProvider>
  </StrictMode>,
)
