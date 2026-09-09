console.log("Stock funcionando");

const productos = [
    {
        codigo : "TC001",
        nombre : "Torta Cuadrada de Chocolate",
        precio : 45000,
        imagen : "../img/TC001.png",
        categoria : "Tortas Cuadradas",
        descripcion : "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales.",
        stock : 10
    },
    {
        codigo : "TC002",
        nombre : "Torta Cuadrada de Frutas",
        precio : 50000,
        imagen : "../img/TC002.png",
        categoria : "Tortas Cuadradas",
        descripcion: "Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones..",    
        stock : 15
    },
    {
        codigo : "TT001",
        nombre : "Torta Circular de Vainilla",
        precio : 40000,
        imagen : "../img/TT001.png",
        categoria : "Tortas Circulares",
        descripcion: "Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión.",
        stock : 8
    },   
    {
        codigo : "TT002",
        nombre : "Torta Circular de Manjar",
        precio : 42000,
        imagen : "../img/TT002.png",
        categoria : "Postres Circulares",
        descripcion: "Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos.",
        stock : 20
    },
    {
        codigo : "PI001",
        nombre : "Mousse de Chocolate",
        precio : 5000,
        imagen : "../img/PI001.png",
        categoria : "Postres Individuales",
        descripcion : "Postre individual cremoso y suave, hecho con chocolate de alta calidad, ideal para los amantes del chocolate.",
        stock : 25
    },
    {
        codigo : "PI002",
        nombre: "Tiramisu Clasico",
        precio : 5500,
        imagen : "../img/PI002.png",
        categoria : "Postres Individuales",
        descripcion : " Un postre italiano individual con capas de café, mascarpone y cacao, perfecto para finalizar cualquier comida.",
        stock : 30
    },
    {
        codigo : "PSA001",
        nombre : "Torta sin azucar de Naranja",
        precio : 48000,
        imagen : "../img/PSA001.png",
        categoria : "Productos sin Azucar",
        descripcion : "Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables.",
        stock : 12
    },
    {
        codigo : "PSA002",
        nombre : "Cheesecake sin azucar",
        precio : 47000,
        imagen : "../img/PSA002.png",
        categoria : "Productos sin Azucar",
        descripcion : "Suave y cremoso, este cheesecake es una opción perfecta para disfrutar sin culpa.",
        stock : 18
    },
    {
        codigo : "PT001",
        nombre : "Empanada de Manzana",
        precio : 3000,
        imagen : "../img/PT001.png",
        categoria : "Pasteleria Tradicional",
        descripcion : "Pastelería tradicional rellena de manzanas especiadas, perfecta para un dulce desayuno o merienda.",
        stock : 40
    },
    {
        codigo : "PT002",
        nombre : "Tarta de Santiago",
        precio : 6000,
        imagen : "../img/PT002.png",
        categoria : "Pasteleria Tradicional",
        descripcion : " Tradicional tarta española hecha con almendras, azúcar, y huevos, una delicia para los amantes de los postres clásicos.",
        stock : 22
    },
    {
        codigo : "PG001",
        nombre : "Brownie sin gluten",
        precio : 4000,
        imagen : "../img/PG001.png",
        categoria : "Productos sin Gluten",
        descripcion : "Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor",
        stock : 35
    },
    {
        codigo : "PG002",
        nombre : "Pan sin gluten",
        precio : 3500,
        imagen : "../img/PG002.png",
        categoria : "Productos sin Gluten",
        descripcion : "Suave y esponjoso, ideal para sándwiches o para acompañar cualquier comida.",
        stock : 28
    },
    {
        codigo : "PV001",
        nombre : "Torta Vegana de Chocolate",
        precio : 50000,
        imagen : "../img/PV001.png",
        categoria : "Productos Veganos",
        descripcion : "Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal, perfecta para veganos.",
        stock : 14
    },
    {
        codigo : "PV002",
        nombre : "Galletas Veganas de Avena",
        precio : 4500,
        imagen : "../img/PV002.png",
        categoria : "Productos Veganos",
        descripcion : "Crujientes y sabrosas, estas galletas son una excelente opción para un snack saludable y vegano.",
        stock : 50
    },
    {
        codigo : "TE001",
        nombre : "Torta Especial de Cumpleaños",
        precio : 55000,
        imagen : "../img/TE001.png",
        categoria : "Tortas Especiales",
        descripcion : "Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos",
        stock : 10
    },
    {
        codigo : "TE002",
        nombre : "Torta Especial de Bodas",
        precio : 60000,
        imagen : "../img/TE002.png",
        categoria : "Tortas Especiales",
        descripcion : "Elegante y deliciosa, esta torta está diseñada para ser el centro de atención en cualquier boda.",
        stock : 5
    }
]