console.log('Cargando utilidades del carrito...');

function obtenerCarrito() {
    try {
        const carrito = localStorage.getItem('carrito');
        return carrito ? JSON.parse(carrito) : [];
    } catch (error) {
        console.error('Error al leer carrito:', error);
        return [];
    }
}

function guardarCarrito(carrito) {
    try {
        localStorage.setItem('carrito', JSON.stringify(carrito));
        console.log('Carrito guardado:', carrito);
    } catch (error) {
        console.error('Error al guardar carrito:', error);
    }
}

function actualizarBadgeCarrito() {
    const carrito = obtenerCarrito();
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
    const badges = document.querySelectorAll('#badge-carrito');
    
    badges.forEach(badge => {
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'inline-block' : 'none';
    });
    
    console.log(`Badge actualizado: ${totalItems} items`);
}

function agregarAlCarrito(codigo, cantidad = 1) {
    console.log(`Añadiendo al carrito: ${codigo} x ${cantidad}`);
    
    const producto = productos.find(p => p.codigo === codigo);
    if (!producto) {
        console.error('Producto no encontrado:', codigo);
        return false;
    }
    
    if (producto.stock < cantidad) {
        console.warn(`Stock insuficiente. Disponible: ${producto.stock}, Solicitado: ${cantidad}`);
        return false;
    }
    
    const carrito = obtenerCarrito();
    
    const itemExistente = carrito.find(item => item.codigo === codigo);
    
    if (itemExistente) {
        if (itemExistente.cantidad + cantidad > producto.stock) {
            console.warn(`⚠️ Excede stock disponible. En carrito: ${itemExistente.cantidad}, Disponible: ${producto.stock}`);
            return false;
        }
        itemExistente.cantidad += cantidad;
        console.log(`Producto actualizado: ${codigo} x ${itemExistente.cantidad}`);
    } else {
        carrito.push({
            codigo: codigo,
            cantidad: cantidad
        });
        console.log(`Producto agregado: ${codigo} x ${cantidad}`);
    }
    
    guardarCarrito(carrito);
    
    actualizarBadgeCarrito();
    
    return true;
}

function eliminarDelCarrito(codigo) {
    console.log(`Eliminando del carrito: ${codigo}`);
    
    let carrito = obtenerCarrito();
    const carritoFiltrado = carrito.filter(item => item.codigo !== codigo);
    
    if (carritoFiltrado.length !== carrito.length) {
        guardarCarrito(carritoFiltrado);
        actualizarBadgeCarrito();
        console.log('Producto eliminado');
    } else {
        console.warn('Producto no encontrado en el carrito');
    }
}

function vaciarCarrito() {
    console.log('Vaciando carrito...');
    guardarCarrito([]);
    actualizarBadgeCarrito();
    console.log('Carrito vaciado');
}

function totalItemsCarrito() {
    const carrito = obtenerCarrito();
    return carrito.reduce((total, item) => total + item.cantidad, 0);
}

function totalPrecioCarrito() {
    const carrito = obtenerCarrito();
    return carrito.reduce((total, item) => {
        const producto = productos.find(p => p.codigo === item.codigo);
        return total + (producto ? producto.precio * item.cantidad : 0);
    }, 0);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Inicializando badge del carrito...');
    actualizarBadgeCarrito();
});

console.log('Utilidades del carrito cargadas correctamente');