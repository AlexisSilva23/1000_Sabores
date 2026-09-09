
function obtenerCarrito() {
    const carrito = localStorage.getItem('carrito');
    return carrito ? JSON.parse(carrito) : [];
}

// Función para guardar el carrito en localStorage
function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para actualizar el badge del carrito en el navbar
function actualizarBadgeCarrito() {
    const carrito = obtenerCarrito();
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
    const badge = document.querySelector('#badge-carrito');
    if (badge) {
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'inline-block' : 'none';
    }
}

// Función para añadir un producto al carrito
function agregarAlCarrito(codigo, cantidad = 1) {
    // Buscar el producto en el stock
    const producto = productos.find(p => p.codigo === codigo);
    if (!producto) {
        console.error('Producto no encontrado');
        return false;
    }
    
    // Verificar stock disponible
    if (producto.stock < cantidad) {
        return false; // No hay suficiente stock
    }
    
    // Obtener carrito actual
    const carrito = obtenerCarrito();
    
    // Buscar si el producto ya está en el carrito
    const itemExistente = carrito.find(item => item.codigo === codigo);
    
    if (itemExistente) {
        // Verificar que no exceda el stock
        if (itemExistente.cantidad + cantidad > producto.stock) {
            return false; // Excede el stock disponible
        }
        itemExistente.cantidad += cantidad;
    } else {
        carrito.push({
            codigo: codigo,
            cantidad: cantidad
        });
    }
    
    // Guardar carrito actualizado
    guardarCarrito(carrito);
    
    // Actualizar badge
    actualizarBadgeCarrito();
    
    return true;
}

// Función para obtener el total de items en el carrito
function totalItemsCarrito() {
    const carrito = obtenerCarrito();
    return carrito.reduce((total, item) => total + item.cantidad, 0);
}

// Función para obtener el precio total del carrito
function totalPrecioCarrito() {
    const carrito = obtenerCarrito();
    return carrito.reduce((total, item) => {
        const producto = productos.find(p => p.codigo === item.codigo);
        return total + (producto ? producto.precio * item.cantidad : 0);
    }, 0);
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(codigo) {
    let carrito = obtenerCarrito();
    carrito = carrito.filter(item => item.codigo !== codigo);
    guardarCarrito(carrito);
    actualizarBadgeCarrito();
}

// Función para vaciar el carrito
function vaciarCarrito() {
    guardarCarrito([]);
    actualizarBadgeCarrito();
}

// Inicializar el badge al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarBadgeCarrito();
});