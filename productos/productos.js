console.log("Holaa");

const contenedor = document.querySelector("#contenedor-productos");

const mostrarProductos = productos.slice(0, 17);  // ← Los 4 primeros

mostrarProductos.forEach(function(producto) {
  const tarjeta = `
    <div class="col-md-3 mb-4">
      <div class="card">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">$${producto.precio.toLocaleString()}</p>
          <a href="../detalle_productos/detalle_productos.html?codigo=${producto.codigo}" class="btn btn-outline-success">Ver Productos</a>
        </div>
      </div>
    </div>
  `;
  
  contenedor.innerHTML += tarjeta;
});