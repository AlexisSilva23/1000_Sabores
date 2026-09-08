console.log("Holaa");

const contenedor = document.querySelector("#contenedor-productos-home");

const mostrarProductos = productos.slice(0, 17);  // ← Los 4 primeros

mostrarProductos.forEach(function(producto) {
  const tarjeta = `
    <div class="col-md-3">
      <div class="card">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">$${producto.precio.toLocaleString()}</p>
          <button class="btn btn-outline-success">Añadir al carrito</button>
        </div>
      </div>
    </div>
  `;
  
  contenedor.innerHTML += tarjeta;
});