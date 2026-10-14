import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from 'react-router-dom';
import {routes} from './routes.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { CartProvider } from './context/cartContext.jsx';
import { AuthProvider } from './context/authContext.jsx';
import { ProductosProvider } from './context/productosContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductosProvider>
      <CartProvider>
      <AuthProvider>
        <RouterProvider router={routes}/>
      </AuthProvider>
    </CartProvider>
    </ProductosProvider>
  </StrictMode>,
)
