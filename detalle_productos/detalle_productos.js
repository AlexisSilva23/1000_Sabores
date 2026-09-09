document.addEventListener('DOMContentLoaded', () => {
    console.log("detalle productos cargado");
    
    const urlParams = new URLSearchParams(window.location.search);
    const codigoProducto = urlParams.get('codigo');
    
    console.log('Código recibido:', codigoProducto);
    console.log('URL completa:', window.location.href);
    
    if (typeof productos === 'undefined') {
        console.error('ERROR: stock.js no está cargado');
        mostrarError('Error: No se pudo cargar el catálogo de productos.');
        return;
    }
    
    console.log(`Total de productos en stock: ${productos.length}`);
    
    if (!codigoProducto) {
        console.warn('No se encontró código en la URL');
        mostrarError('No se especificó ningún producto.');
        return;
    }
    
    const producto = productos.find(p => p.codigo === codigoProducto);
    
    console.log('Producto encontrado:', producto);
    
    if (!producto) {
        console.error(`Producto con código "${codigoProducto}" no encontrado`);
        mostrarError(`Producto "${codigoProducto}" no encontrado.`);
        return;
    }
    
    console.log(`Mostrando producto: ${producto.nombre}`);
    actualizarDetalle(producto);
    
    configurarEventos(producto);
});

function mostrarError(mensaje) {
    const main = document.querySelector('main');
    if (main) {
        main.innerHTML = `
            <div class="container text-center py-5">
                <div class="alert alert-danger">
                    <h4><i class="bi bi-exclamation-triangle"></i> Producto no encontrado</h4>
                    <p>${mensaje}</p>
                    <p class="text-muted small">Código: ${new URLSearchParams(window.location.search).get('codigo') || 'No especificado'}</p>
                    <a href="../productos/productos.html" class="btn btn-chocolate mt-3">
                        <i class="bi bi-arrow-left"></i> Volver a Productos
                    </a>
                </div>
            </div>
        `;
    }
}

function actualizarDetalle(producto) {
    console.log('Actualizando vista con:', producto);
    
    const imagen = document.querySelector('#detalle-imagen');
    if (imagen) {
        imagen.src = producto.imagen || '../img/placeholder.png';
        imagen.alt = producto.nombre;
    }
    
    const nombre = document.querySelector('#detalle-nombre');
    if (nombre) nombre.textContent = producto.nombre;
    
    const precio = document.querySelector('#detalle-precio');
    if (precio) precio.textContent = `$${producto.precio.toLocaleString('es-CL')}`;
    
    const descripcion = document.querySelector('#detalle-descripcion');
    if (descripcion) descripcion.textContent = producto.descripcion || 'Sin descripción disponible.';
    
    const categoriaTag = document.querySelector('#detalle-categoria-tag');
    const categoriaBreadcrumb = document.querySelector('#detalle-categoria');
    if (categoriaTag) categoriaTag.textContent = producto.categoria;
    if (categoriaBreadcrumb) categoriaBreadcrumb.textContent = producto.categoria;
    
    const stockElement = document.querySelector('#detalle-stock');
    if (stockElement) {
        if (producto.stock <= 0) {
            stockElement.textContent = 'Agotado';
            stockElement.className = 'badge bg-danger fs-6';
        } else if (producto.stock <= 5) {
            stockElement.textContent = `${producto.stock} unidades - ¡Últimas unidades!`;
            stockElement.className = 'badge bg-warning fs-6';
        } else {
            stockElement.textContent = `${producto.stock} unidades disponibles`;
            stockElement.className = 'badge bg-success fs-6';
        }
    }
    
    const cantidadInput = document.querySelector('#cantidad-input');
    if (cantidadInput) {
        cantidadInput.max = producto.stock || 99;
        if (producto.stock <= 0) {
            cantidadInput.disabled = true;
            cantidadInput.value = 0;
        } else {
            cantidadInput.disabled = false;
            cantidadInput.value = 1;
        }
    }
    
    const btnAgregar = document.querySelector('#btn-agregar-carrito');
    if (btnAgregar) {
        if (producto.stock <= 0) {
            btnAgregar.disabled = true;
            btnAgregar.innerHTML = '<i class="bi bi-x-circle"></i> Agotado';
            btnAgregar.className = 'btn btn-secondary btn-lg flex-grow-1';
        } else {
            btnAgregar.disabled = false;
            btnAgregar.innerHTML = '<i class="bi bi-cart-plus"></i> Añadir al Carrito';
            btnAgregar.className = 'btn btn-chocolate btn-lg flex-grow-1';
        }
    }
}

function configurarEventos(producto) {
    console.log('Configuracion de eventos');
    
    const cantidadInput = document.querySelector('#cantidad-input');
    
    if (cantidadInput) {
        cantidadInput.addEventListener('change', () => {
            let valor = parseInt(cantidadInput.value) || 1;
            const max = parseInt(cantidadInput.max) || 99;
            if (valor < 1) {
                cantidadInput.value = 1;
            } else if (valor > max) {
                cantidadInput.value = max;
                mostrarMensaje(`Solo tenemos ${max} unidades disponibles`, 'warning');
            }
        });
    }
    
    const btnAgregar = document.querySelector('#btn-agregar-carrito');
    if (btnAgregar && producto.stock > 0) {
        btnAgregar.replaceWith(btnAgregar.cloneNode(true));
        const nuevoBtn = document.querySelector('#btn-agregar-carrito');
        
        nuevoBtn.addEventListener('click', () => {
            console.log('Click en "Añadir al Carrito"');
            
            const cantidad = parseInt(cantidadInput.value) || 1;
            console.log(`Cantidad seleccionada: ${cantidad}`);
            
            if (typeof agregarAlCarrito === 'undefined') {
                console.error('ERROR: carrito_utils.js no está cargado');
                mostrarMensaje('Error: No se pudo cargar el carrito.', 'danger');
                return;
            }
            
            const exito = agregarAlCarrito(producto.codigo, cantidad);
            console.log(`Resultado: ${exito ? 'Éxito' : 'Fallo'}`);
            
            if (exito) {
                const mensaje = `${cantidad} ${cantidad === 1 ? 'unidad' : 'unidades'} de "${producto.nombre}" añadida${cantidad === 1 ? '' : 's'} al carrito`;
                mostrarMensaje(mensaje, 'success');
                
                if (typeof actualizarBadgeCarrito !== 'undefined') {
                    actualizarBadgeCarrito();
                }
            } else {
                const carrito = typeof obtenerCarrito !== 'undefined' ? obtenerCarrito() : [];
                const itemEnCarrito = carrito.find(item => item.codigo === producto.codigo);
                const cantidadEnCarrito = itemEnCarrito ? itemEnCarrito.cantidad : 0;
                
                if (cantidadEnCarrito + cantidad > producto.stock) {
                    mostrarMensaje(
                        `No tenemos suficiente stock. Disponibles: ${producto.stock - cantidadEnCarrito} unidades`,
                        'danger'
                    );
                } else {
                    mostrarMensaje(
                        'No se pudo añadir el producto al carrito. Intenta nuevamente.',
                        'danger'
                    );
                }
            }
        });
    }
}

function mostrarMensaje(texto, tipo = 'success') {
    console.log(`Mensaje (${tipo}): ${texto}`);
    
    let mensajeContainer = document.querySelector('#mensaje-carrito');
    
    if (!mensajeContainer) {
        const main = document.querySelector('main');
        if (!main) return;
        
        mensajeContainer = document.createElement('div');
        mensajeContainer.id = 'mensaje-carrito';
        mensajeContainer.className = 'container mt-3';
        mensajeContainer.style.position = 'fixed';
        mensajeContainer.style.top = '100px';
        mensajeContainer.style.right = '20px';
        mensajeContainer.style.zIndex = '9999';
        mensajeContainer.style.maxWidth = '400px';
        document.body.appendChild(mensajeContainer);
    }
    
    const alerta = document.createElement('div');
    alerta.className = `alert alert-${tipo} alert-dismissible fade show shadow`;
    alerta.innerHTML = `
        <i class="bi bi-${tipo === 'success' ? 'check-circle-fill' : tipo === 'danger' ? 'exclamation-triangle-fill' : 'info-circle-fill'} me-2"></i>
        ${texto}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    mensajeContainer.innerHTML = '';
    mensajeContainer.appendChild(alerta);
    
    setTimeout(() => {
        if (alerta.parentNode) {
            alerta.remove();
        }
    }, 4000);
}

