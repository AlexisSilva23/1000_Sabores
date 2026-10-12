import estilos from "./nosotros.module.css";

function Nosotros() {
    return (
    <>
      <main className="container mt-5">
        <div className="text-center mb-4">
          <img src="/img/logo.png" alt="Mil Sabores" className={estilos.logo}></img>
        </div>

        <section className="infoEmpresa">
            <h1 className="titulo1">Nuestra Historia: Celebrando 50 años dando sabores</h1>
            <p>Bienvenidos a <strong>Pasteleria Mil Sabores! </strong>Nuestra pasteleria empezo desde cero fue todo una
                idea
                al principio y con el tiempo esa idea crecio y se convirtio en algo grande dando felicidad a cada uno de
                nuestros clientes hoy estamos celebrando nuestro aniversario numero 50 y queremos agradecer dando una
                mejora
                en nuestra pagina web para que nuestros clientes sientan nuestro cariño entendiendo como nos sentimos
                con
                ellos
            </p>
        </section>
        <section className="datos_empresa">
            <h1 className="segundo_titulo">Sobre nuestra pasteleria</h1>
            <p>Llevamos 50 años en este rubro, partiendo desde una pequeña pasteleria con apenas
              3 sabores, pero con mucho tiempo, dedicacion y sabores salimos adelante, y sobretodo gracias a
              los fieles clientes que siguen confiando en la pasteleria, y que permiten que sigamos creciendo
              en todas las areas disponibles y mejorando nuestros queridisimos sabores!
            </p>
        </section>
        <br />
        <section className="equipo_desarrolladores">
            <h2>Equipo de Desarrolladores</h2>
            <ul>
                <li><strong>Alexis Silva:</strong> Encargado de la estructura HTML y diseño de las vistas: Home,
                    Productos, Detalles Productos, Carrito Compras, Iniciar Sesion.</li>
                <li><strong>Felipe Yefi:</strong> Encargado de la estructura HTML y diseño de las vistas: Registro
                    Usuario, Nosotros, Blogs, Contactos.</li>
                <li><strong>Joaquin Rodriguez:</strong> Encargado de la estructura HTML y diseño de las vistas: Home
                    Administrativo, Nuevo Producto/Editar Producto, Usuarios, Nuevo Usuarios/Editar Usuarios.</li>
            </ul>
        </section>
      </main>
    </>
  );
}
export default Nosotros;