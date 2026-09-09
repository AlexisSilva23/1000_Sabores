console.log("Carrito funciona");

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado');
    
    if (typeof productos === 'undefined') {
        console.error('ERROR: stock.js no está cargado');
        mostrarError('No se pudo cargar el catálogo de productos.');
        return;
    }
    
    console.log(`${productos.length} productos disponibles en stock`);
    
    renderizarCarrito();
    
    configurarEventosCarrito();
});

function renderizarCarrito() {
    console.log('Renderizando carrito...');
    
    const carrito = obtenerCarrito();
    console.log('Carrito actual:', carrito);
    
    const contenedor = document.querySelector('#lista-productos-carrito');
    const carritoVacio = document.querySelector('#carrito-vacio');
    const carritoContenido = document.querySelector('#carrito-contenido');
    const resumen = document.querySelector('#resumen-carrito');
    
    if (!contenedor) {
        console.error('No se encontró #lista-productos-carrito');
        return;
    }
    
    if (!carrito || carrito.length === 0) {
        console.log('Carrito vacío');
        if (carritoVacio) carritoVacio.style.display = 'block';
        if (carritoContenido) carritoContenido.style.display = 'none';
        if (resumen) resumen.innerHTML = '';
        actualizarBadgeCarrito();
        return;
    }
    
    if (carritoVacio) carritoVacio.style.display = 'none';
    if (carritoContenido) carritoContenido.style.display = 'block';
    
    contenedor.innerHTML = '';
    
    let totalProductos = 0;
    let totalPrecio = 0;
    
    carrito.forEach((item, index) => {
        const producto = productos.find(p => p.codigo === item.codigo);
        
        if (!producto) {
            console.warn(`Producto no encontrado: ${item.codigo}`);
            return;
        }
        
        const subtotal = producto.precio * item.cantidad;
        totalProductos += item.cantidad;
        totalPrecio += subtotal;
        
        const itemHTML = `
            <div class="carrito-item" data-index="${index}">
                <div class="row align-items-center">
                    <div class="col-3 col-md-2">
                        <img src="${producto.imagen || '../img/placeholder.png'}" 
                             alt="${producto.nombre}" 
                             class="img-fluid rounded">
                    </div>
                    <div class="col-9 col-md-4">
                        <h6 class="item-nombre mb-1">${producto.nombre}</h6>
                        <small class="text-muted">${producto.categoria}</small>
                    </div>
                    <div class="col-4 col-md-2 text-center">
                        <span class="item-precio">$${producto.precio.toLocaleString('es-CL')}</span>
                    </div>
                    <div class="col-4 col-md-2">
                        <div class="item-cantidad">
                            <button class="btn-cantidad-menos" data-codigo="${producto.codigo}">−</button>
                            <span class="cantidad-texto">${item.cantidad}</span>
                            <button class="btn-cantidad-mas" data-codigo="${producto.codigo}">+</button>
                        </div>
                    </div>
                    <div class="col-4 col-md-2 text-end">
                        <span class="item-subtotal">$${subtotal.toLocaleString('es-CL')}</span>
                        <button class="btn btn-sm btn-outline-danger ms-2 btn-eliminar-item" 
                                data-codigo="${producto.codigo}">
                            <i class="bi bi-x"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        contenedor.innerHTML += itemHTML;
    });
    
    if (resumen) {
        resumen.innerHTML = `
            <div class="d-flex justify-content-between">
                <span>Productos (${totalProductos})</span>
                <span>$${totalPrecio.toLocaleString('es-CL')}</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
                <span>Envío</span>
                <span class="text-success">Gratis</span>
            </div>
            <hr>
            <div class="d-flex justify-content-between total-label">
                <span class="fs-5">Total</span>
                <span class="total-precio">$${totalPrecio.toLocaleString('es-CL')}</span>
            </div>
        `;
    }
    
    actualizarBadgeCarrito();
    
    console.log(`Carrito renderizado: ${carrito.length} items, total: $${totalPrecio}`);
}

function configurarEventosCarrito() {
    
    const btnVaciar = document.querySelector('#btn-vaciar-carrito');
    if (btnVaciar) {
        btnVaciar.addEventListener('click', () => {
            if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
                vaciarCarrito();
                renderizarCarrito();
                mostrarMensaje('Carrito vaciado correctamente', 'info');
            }
        });
    }
    
    const btnFinalizar = document.querySelector('#btn-finalizar-compra');
    if (btnFinalizar) {
        btnFinalizar.addEventListener('click', () => {
            const carrito = obtenerCarrito();
            if (carrito.length === 0) {
                alert('Tu carrito está vacío. Añade algunos productos primero.');
                return;
            }
            alert('¡Gracias por tu compra! Pronto recibirás tu pedido.');
            vaciarCarrito();
            renderizarCarrito();
        });
    }
    
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-cantidad-mas') || e.target.closest('.btn-cantidad-mas')) {
            const btn = e.target.closest('.btn-cantidad-mas') || e.target;
            const codigo = btn.dataset.codigo;
            if (codigo) {
                modificarCantidad(codigo, 1);
            }
        }
        
        if (e.target.classList.contains('btn-cantidad-menos') || e.target.closest('.btn-cantidad-menos')) {
            const btn = e.target.closest('.btn-cantidad-menos') || e.target;
            const codigo = btn.dataset.codigo;
            if (codigo) {
                modificarCantidad(codigo, -1);
            }
        }
        
        if (e.target.classList.contains('btn-eliminar-item') || e.target.closest('.btn-eliminar-item')) {
            const btn = e.target.closest('.btn-eliminar-item') || e.target;
            const codigo = btn.dataset.codigo;
            if (codigo) {
                eliminarDelCarrito(codigo);
                renderizarCarrito();
                mostrarMensaje('Producto eliminado del carrito', 'warning');
            }
        }
    });
}

function modificarCantidad(codigo, cambio) {
    console.log(`Modificando cantidad de ${codigo}: ${cambio}`);
    
    const carrito = obtenerCarrito();
    const item = carrito.find(i => i.codigo === codigo);
    
    if (!item) {
        console.warn(`Producto ${codigo} no encontrado en el carrito`);
        return;
    }
    
    const producto = productos.find(p => p.codigo === codigo);
    if (!producto) {
        console.warn(`Producto ${codigo} no encontrado en stock`);
        return;
    }
    
    const nuevaCantidad = item.cantidad + cambio;
    
    if (nuevaCantidad < 1) {
        eliminarDelCarrito(codigo);
        renderizarCarrito();
        mostrarMensaje('Producto eliminado del carrito', 'warning');
        return;
    }
    
    if (nuevaCantidad > producto.stock) {
        mostrarMensaje(`Solo tenemos ${producto.stock} unidades disponibles`, 'danger');
        return;
    }
    
    item.cantidad = nuevaCantidad;
    guardarCarrito(carrito);
    renderizarCarrito();
    actualizarBadgeCarrito();
}

function mostrarMensaje(texto, tipo = 'success') {
    const alerta = document.createElement('div');
    alerta.className = `alert alert-${tipo} alert-dismissible fade show position-fixed top-0 end-0 m-3`;
    alerta.style.zIndex = '9999';
    alerta.style.minWidth = '250px';
    alerta.innerHTML = `
        <i class="bi bi-${tipo === 'success' ? 'check-circle' : tipo === 'danger' ? 'exclamation-triangle' : 'info-circle'}"></i>
        ${texto}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    document.body.appendChild(alerta);
    
    setTimeout(() => {
        if (alerta.parentNode) {
            alerta.remove();
        }
    }, 3000);
}

function mostrarError(mensaje) {
    const main = document.querySelector('main');
    if (main) {
        main.innerHTML = `
            <div class="container text-center py-5">
                <div class="alert alert-danger">
                    <h4><i class="bi bi-exclamation-triangle"></i> Error</h4>
                    <p>${mensaje}</p>
                    <a href="../productos/productos.html" class="btn btn-chocolate mt-3">
                        <i class="bi bi-arrow-left"></i> Volver a Productos
                    </a>
                </div>
            </div>
        `;
    }
}