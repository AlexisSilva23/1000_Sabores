import { createBrowserRouter } from "react-router-dom";
import Inicio from "./pages/inicio/inicio";
import Carrito from "./pages/carrito/carrito";
import Nosotros from "./pages/nosotros/nosotros";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Inicio/>
    },
    {
        path:'./carrito',
        element: <Carrito/>
    },
    {
        path:'./nosotros',
        element: <Nosotros/>
    }

]);