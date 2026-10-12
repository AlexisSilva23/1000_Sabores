import { useState } from 'react';
import './stock.css';

const productos = [
  { codigo: 'TC001', nombre: 'Torta Cuadrada de Chocolate', stock: 10, limite: 20 },
  { codigo: 'TC002', nombre: 'Torta Cuadrada de Frutas', stock: 15, limite: 20 },
  { codigo: 'TT001', nombre: 'Torta Circular de Vainilla', stock: 8, limite: 20 },
  { codigo: 'TT002', nombre: 'Torta Circular de Manjar', stock: 20, limite: 25 },
  { codigo: 'PI001', nombre: 'Mousse de Chocolate', stock: 25, limite: 40 },
  { codigo: 'PI002', nombre: 'Tiramisu Clasico', stock: 30, limite: 40 },
  { codigo: 'PSA001', nombre: 'Torta sin azucar de Naranja', stock: 12, limite: 20 },
  { codigo: 'PSA002', nombre: 'Cheesecake sin azucar', stock: 18, limite: 25 },
  { codigo: 'PT001', nombre: 'Empanada de Manzana', stock: 40, limite: 60 },
  { codigo: 'PT002', nombre: 'Tarta de Santiago', stock: 22, limite: 30 },
  { codigo: 'PG001', nombre: 'Brownie sin gluten', stock: 35, limite: 50 },
  { codigo: 'PG002', nombre: 'Pan sin gluten', stock: 28, limite: 40 },
  { codigo: 'PV001', nombre: 'Torta Vegana de Chocolate', stock: 14, limite: 20 },
  { codigo: 'PV002', nombre: 'Galletas Veganas de Avena', stock: 50, limite: 60 },
  { codigo: 'TE001', nombre: 'Torta Especial de Cumpleaños', stock: 10, limite: 20 },
  { codigo: 'TE002', nombre: 'Torta Especial de Bodas', stock: 5, limite: 10 },
];

function emojiDe(codigo) {
  if (codigo.startsWith('PI')) return '🍮';
  if (codigo.startsWith('PSA')) return '🍰';
  if (codigo.startsWith('PT')) return '🥧';
  if (codigo.startsWith('PG')) return '🍞';
  if (codigo.startsWith('PV')) return '🍪';
  return '🎂';
}

function nivelDe(porcentaje) {
  if (porcentaje === 0) return 'agotado';
  if (porcentaje <= 25) return 'bajo';
  if (porcentaje <= 60) return 'medio';
  return 'alto';
}

function Stock() {
  const [busqueda, setBusqueda] = useState('');

  const totalStock = productos.reduce((suma, p) => suma + p.stock, 0);
  const totalLimite = productos.reduce((suma, p) => suma + p.limite, 0);

  const visibles = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="stock-pagina flex-fill">
      <div className="stock-encabezado d-flex justify-content-between align-items-center">
        <h1 className="h3 fw-bold mb-0">🧁 Stock de la pastelería</h1>
        <span className="h4 mb-0">🔔</span>
      </div>

      <div className="p-4">
        <div className="stock-resumen mb-4">
          <div className="stock-resumen-numero">{totalStock}</div>
          <div>
            productos en stock de {totalLimite} de capacidad
            <br />
            <small>{productos.length} tipos de productos</small>
          </div>
        </div>

        <input
          type="text"
          className="form-control stock-buscador mb-4"
          placeholder="Buscar un producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          />

        <div className="row g-3">
          {visibles.map((p) => {
            const porcentaje = Math.min(100, (p.stock / p.limite) * 100);
            const nivel = nivelDe(porcentaje);

            return (
              <div className="col-sm-6 col-lg-4 col-xl-3" key={p.codigo}>
                <div className="stock-tarjeta">
                  <div className="stock-emoji">{emojiDe(p.codigo)}</div>
                  <div className="stock-codigo">{p.codigo}</div>
                  <div className="stock-nombre">{p.nombre}</div>

                  <div className="stock-barra">
                    <div
                      className={`stock-barra-relleno stock-${nivel}`}
                      style={{ width: `${porcentaje}%` }}
                    ></div>
                  </div>

                  <div className="stock-cantidad">
                    {p.stock === 0 ? 'Agotado' : `${p.stock} / ${p.limite} unidades`}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {visibles.length === 0 && (
          <p className="text-center mt-4">No se encontró ningún producto 🥲</p>
        )}
      </div>
    </div>
  );
}

export default Stock;