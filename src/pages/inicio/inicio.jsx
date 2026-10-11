function Inicio() {
  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="card mb-3 w-100">
            <div className="row g-0 d-flex align-items-center justify-content-center">

              <div className="col-lg-6">
                <img src="../img/img_pasteleria.png" className="img-fluid rounded-start" alt="..." />
              </div>

              <div className="col-lg-6 d-flex align-items-center justify-content-center">
                <div className="card-body">
                  <h5 className="card-title">Bienvenido a Mil Sabores</h5>
                  <p className="card-text">
                    Descubre una amplia variedad de productos de alta calidad y sabores únicos.
                    Nuestra Tienda Online posee una extensa variedad de productos que seguramente seran de su agrado.
                  </p>
                  <a href="../productos/productos.jsx" className="btn btn-outline-primary">Ver Productos</a>
                  <a href="../nosotros/nosotros.jsx" className="btn btn-outline-primary">Sobre nosotros</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inicio;