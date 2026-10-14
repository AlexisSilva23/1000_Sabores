import { useState } from 'react';

function Contacto() {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");

    function enviarMensaje(e) {
        e.preventDefault();

        if (nombre.trim() === "") {
            alert("Por favor, ingrese su nombre completo.");
            return;
        }

        if (correo.trim() === "") {
            alert("Por favor, ingrese su correo.");
            return;
        }

        if (mensaje.trim() === "") {
            alert("Por favor, escriba el mensaje.");
            return;
        }

        console.log("Los siguientes datos fueron enviados: ", { nombre, correo, mensaje });

        alert("¡Mensaje enviado con éxito!");
    }

    return (
        <main className="container mt-4 mb-5">
            <div className="text-center mb-4">
                <img src="/img/logo.png" alt="Mil Sabores" />
            </div>

            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-sm p-4">
                        <h2 className="mb-4">
                            CONTACTANOS
                        </h2>
                        <form onSubmit={enviarMensaje}>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label htmlFor="txtNombre" >
                                        NOMBRE COMPLETO
                                    </label>
                                    <input type="text" id="txtNombre" className="form-control" placeholder="Ej: Neymar Junior" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                                </div>
                                <div className="col-12 mb-3">
                                    <label htmlFor="txtCorreo">
                                        CORREO
                                    </label>
                                    <input type="email" id="txtCorreo" className="form-control" placeholder="Ej: NeymarJunior10@duocuc.cl" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
                                </div>
                                <div className="col-12 mb-3">
                                    <label htmlFor="txtMensaje">
                                        MENSAJE
                                    </label>
                                    <textarea id="txtMensaje" className="form-control" rows="5" placeholder="ESCRIBA EL MENSAJE...." value={mensaje} onChange={(e) => setMensaje(e.target.value)} required></textarea>
                                </div>
                            </div>
                            <div className="mt-4">
                                <button type="button" onClick={enviarMensaje} className="btn w-100 text-white" style={{ backgroundColor: '#8B4513'}}>
                                    ENVIAR MENSAJE
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </main>
    );
}

export default Contacto;