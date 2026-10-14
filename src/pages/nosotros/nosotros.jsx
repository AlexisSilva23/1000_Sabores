

function Nosotros() {
  return (
    <main className="container mt-5 mb-5">

      <div className="row mb-5">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <section className="card shadow-sm h-100 border-0">
            <div className="card-body p-4 p-md-5">
              <h1 className="titulo1 mb-4">Nuestra Historia: Celebrando 50 años dando sabores</h1>
              <p className="text-muted">
                Bienvenidos a <strong>Pasteleria Mil Sabores!</strong> Nuestra pasteleria empezo desde cero fue todo una idea al principio y con el tiempo esa idea crecio y se convirtio en algo grande dando felicidad a cada uno de nuestros clientes.
              </p>
              <p className="text-muted">
                Hoy estamos celebrando nuestro aniversario numero 50 y queremos agradecer dando una mejora en nuestra pagina web para que nuestros clientes sientan nuestro cariño entendiendo como nos sentimos con ellos.
              </p>
            </div>
          </section>
        </div>

        <div className="col-lg-6">
          <section className="card shadow-sm h-100 border-0">
            <div className="card-body p-4 p-md-5">
              <h1 className="segundo_titulo mb-4">Sobre nuestra pasteleria</h1>
              <p className="text-muted">
                Llevamos 50 años en este rubro, partiendo desde una pequeña pasteleria con apenas 3 sabores, pero con mucho tiempo, dedicacion y sabores salimos adelante.
              </p>
              <p className="text-muted">
                Sobre todo gracias a los fieles clientes que siguen confiando en la pasteleria, y que permiten que sigamos creciendo en todas las areas disponibles y mejorando nuestros queridisimos sabores!
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12">
          <section className="card shadow-sm border-0">
            <div className="card-body p-4 p-md-5 text-center">
              <h2 className="mb-4">Convenio Duoc UC</h2>
              <p className="text-muted fs-5 mb-0">
                Por nuestro aniversario numero 50 queremos ofrecerles a los estudiantes de DuocUC el beneficio de probar nuestros productos al comprobar su fecha de cumpleaños se les dara el enorme regalo
                  de una torta gratis para celebrar tu dia esto es en parte a el gran apoyo que se nos ah dado y que DuocUC alla querido apoyarnos en este emprendimiento.
              </p>
            </div>
          </section>
        </div>
      </div>

      <section className="equipo_desarrolladores text-center mt-5 pt-4">
        <h2 className="mb-5">Equipo de Desarrolladores</h2>
        <div className="row justify-content-center">

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0 h-100 py-4">
              <div className="card-body">
                <i className="bi bi-layout-text-window-reverse fs-1 text-secondary mb-3 d-block"></i>
                <h3 className="h5 fw-bold">Alexis Silva</h3>
                <p className="text-muted small px-2">
                  Encargado de la estructura HTML y diseño de las vistas: Home, Productos, Detalles Productos, Carrito Compras, Iniciar Sesion.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0 h-100 py-4">
              <div className="card-body">
                <i className="bi bi-window-sidebar fs-1 text-secondary mb-3 d-block"></i>
                <h3 className="h5 fw-bold">Felipe Yefi</h3>
                <p className="text-muted small px-2">
                  Encargado de la estructura HTML y diseño de las vistas: Registro Usuario, Nosotros, Blogs, Contactos.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0 h-100 py-4">
              <div className="card-body">
                <i className="bi bi-gear-fill fs-1 text-secondary mb-3 d-block"></i>
                <h3 className="h5 fw-bold">Joaquin Rodriguez</h3>
                <p className="text-muted small px-2">
                  Encargado de la estructura HTML y diseño de las vistas: Home Administrativo, Nuevo Producto/Editar Producto, Usuarios, Nuevo Usuarios/Editar Usuarios.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Nosotros;