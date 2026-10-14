import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Inicio from "./pages/inicio/inicio";
import Carrito from "./pages/carrito/carrito";
import Nosotros from "./pages/nosotros/nosotros";
import Productos from "./pages/productos/productos";
import Blog from "./pages/blogs/blog";
import DetalleProducto from "./pages/detalle-producto/detalleProducto";
import InicioSesion from "./pages/inicio-sesion/inicioSesion";
import RegistroUsuario from "./pages/registro-usuario/registroUsuario";
import HomeAdmin from "./pages/home-admin/homeAdmin";
import UsuariosAdmin from "./pages/users-admin/usuariosAdmin";
import Contacto from "./pages/contacto/contacto";

export const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/blogs", element: <Blog /> },
      { path: "/carrito", element: <Carrito /> },
      { path: "/contacto", element: <Contacto/> },
      { path: "/detalle-producto/:codigo", element: <DetalleProducto /> },
      { path: "/", element: <Inicio /> },
      { path: "/nosotros", element: <Nosotros /> },
      { path: "/productos", element: <Productos /> }

    ],
  },
      { path: "/inicio-sesion", element: <InicioSesion /> },
      { path: "/registro-usuario", element: <RegistroUsuario /> },
      { path: "/home-admin", element: <HomeAdmin /> },
      { path: "/users-admin", element: <UsuariosAdmin/>}
]);