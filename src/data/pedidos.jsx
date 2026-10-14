const clave = "pedidos";

const leer = () =>{
    try{
        return JSON.parse(localStorage.getItem(clave)) || [];
    }
    catch{
        return [];
    }
};

const guardar = (lista) => localStorage.setItem(clave, JSON.stringify(lista));

export const listarPedidos = () => leer();

export const obtenerPedido = (numero) => leer().find((p) => p.numero === numero);

export const crearPedido = (datos) => {
  const pedidos = leer();
  const numero = `${new Date().getFullYear()}${String(pedidos.length + 1).padStart(4, "0")}`;
  const nuevo = { numero, fecha: new Date().toISOString(), ...datos };
  guardar([...pedidos, nuevo]);
  return nuevo;
};

export const actualizarPedido = (numero, cambios) =>
    guardar(leer().map((p) => (p.numero === numero ? {...p, ...cambios } : p)));

export const eliminarPedido = (numero) =>
    guardar(leer().filter((p) => (p.numero !== numero)));