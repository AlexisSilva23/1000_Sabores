document.addEventListener('DOMContentLoaded', () => {
    
    const urlParams = new URLSearchParams(window.location.search);
    const codigoProducto = urlParams.get('codigo');
    
    if (!codigoProducto) {
        window.location.href = '../productos/productos.html';
        return;
    }
    
    const producto = productos.find(p => p.codigo === codigoProducto);
    
    if (!producto) {
        document.querySelector('main').innerHTML = `
            <div class="container text-center py-5">
                <h2 class="text-danger">Producto no encontrado</h2>
                <p>El producto que buscas no existe o ha sido eliminado.</p>
                <a href="../productos/productos.html" class="btn btn-chocolate">Volver a Productos</a>
            </div>
        `;
        return;
    }
    
    actualizarDetalle(producto);
    
    configurarEventos(producto);
});

function actualizarDetalle(producto) {
    
    const imagen = document.querySelector('#detalle-imagen');
    if (imagen) {
        imagen.src = producto.imagen || '../img/placeholder.png';
        imagen.alt = producto.nombre;
    }
    
    // Actualizar título
    const nombre = document.querySelector('#detalle-nombre');
    if (nombre) {
        nombre.textContent = producto.nombre;
    }
    
    // Actualizar precio
    const precio = document.querySelector('#detalle-precio');
    if (precio) {
        precio.textContent = `$${producto.precio.toLocaleString('es-CL')}`;
    }
    
    // Actualizar descripción
    const descripcion = document.querySelector('#detalle-descripcion');
    if (descripcion) {
        descripcion.textContent = producto.descripcion || 'Sin descripción disponible.';
    }
    
    // Actualizar categoría (en breadcrumb y tag)
    const categoriaTag = document.querySelector('#detalle-categoria-tag');
    const categoriaBreadcrumb = document.querySelector('#detalle-categoria');
    if (categoriaTag) {
        categoriaTag.textContent = producto.categoria;
    }
    if (categoriaBreadcrumb) {
        categoriaBreadcrumb.textContent = producto.categoria;
    }
    
    // Actualizar stock
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
    
    // Configurar el input de cantidad según el stock
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
    
    // Deshabilitar el botón de añadir si no hay stock
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
    // Botones de cantidad
    const btnMenos = document.querySelector('#btn-cantidad-menos');
    const btnMas = document.querySelector('#btn-cantidad-mas');
    const cantidadInput = document.querySelector('#cantidad-input');
    
    if (btnMenos && cantidadInput) {
        btnMenos.addEventListener('click', () => {
            let valor = parseInt(cantidadInput.value) || 1;
            if (valor > 1) {
                cantidadInput.value = valor - 1;
            }
        });
    }
    
    if (btnMas && cantidadInput) {
        btnMas.addEventListener('click', () => {
            let valor = parseInt(cantidadInput.value) || 1;
            const max = parseInt(cantidadInput.max) || 99;
            if (valor < max) {
                cantidadInput.value = valor + 1;
            }
        });
    }
    
    // Validar que la cantidad no sea menor a 1 ni mayor al stock
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
    
    // Botón "Añadir al carrito"
    const btnAgregar = document.querySelector('#btn-agregar-carrito');
    if (btnAgregar && producto.stock > 0) {
        btnAgregar.addEventListener('click', () => {
            const cantidad = parseInt(cantidadInput.value) || 1;
            
            // Intentar añadir al carrito
            const exito = agregarAlCarrito(producto.codigo, cantidad);
            
            if (exito) {
                // Mostrar mensaje de éxito
                mostrarMensaje(
                    `${cantidad} ${cantidad === 1 ? 'unidad' : 'unidades'} de "${producto.nombre}" añadida${cantidad === 1 ? '' : 's'} al carrito`,
                    'success'
                );
                
                // Actualizar badge en el navbar (ya lo hace la función agregarAlCarrito)
                actualizarBadgeCarrito();
            } else {
                // Verificar si es por falta de stock
                const carrito = obtenerCarrito();
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
    const mensajeContainer = document.querySelector('#mensaje-carrito');
    const mensajeTexto = document.querySelector('#mensaje-texto');
    
    if (mensajeContainer && mensajeTexto) {
        // Actualizar el mensaje
        mensajeTexto.textContent = texto;
        
        // Cambiar el estilo según el tipo
        const alert = mensajeContainer.querySelector('.alert');
        if (alert) {
            alert.className = `alert alert-${tipo} alert-dismissible fade show`;
        }
        
        // Mostrar el mensaje
        mensajeContainer.style.display = 'block';
        
        // Auto-ocultar después de 5 segundos
        clearTimeout(mensajeContainer.timeout);
        mensajeContainer.timeout = setTimeout(() => {
            mensajeContainer.style.display = 'none';
        }, 5000);
    }
}