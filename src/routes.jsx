import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Inicio from "./pages/inicio/inicio";
import Carrito from "./pages/carrito/carrito";
import Nosotros from "./pages/nosotros/nosotros";
import Productos from "./pages/productos/productos";
import Blog from "./pages/blogs/blog";
import DetalleProducto from "./pages/detalle-producto/detalleProducto";
import InicioAdmin from "./pages/inicio-admin/inicioAdmin";
import InicioSesion from "./pages/inicio-sesion/inicioSesion";
import RegistroUsuario from "./pages/registro-usuario/registroUsuario";

export const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/blogs", element: <Blog /> },
      { path: "/carrito", element: <Carrito /> },
      { path: "/detalle-producto/:codigo", element: <DetalleProducto /> },
      { path: "/", element: <Inicio /> },
      { path: "/nosotros", element: <Nosotros /> },
      { path: "/productos", element: <Productos /> }
    ],
  },
      { path: "/inicio-admin", element: <InicioAdmin /> },
      { path: "/inicio-sesion", element: <InicioSesion /> },
      { path: "/registro-usuario", element: <RegistroUsuario /> }
]);