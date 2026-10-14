import { useState } from 'react';
import Navbar from '../../components/navbar/navbar';

function RegistroUsuario() {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState("");
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [region, setRegion] = useState("");
    const [comuna, setComuna] = useState("");

    function registrar(e) {
        e.preventDefault();

        if (nombre.trim() === "") {
            alert("Por favor, ingrese su nombre.");
            return;
        }

        if (apellido.trim() === "") {
            alert("Por favor, ingrese su apellido.");
            return;
        }

        if (edad === "" || edad <= 0) {
            alert("Por favor, ingrese una edad valida.");
            return;
        }

        if (correo.trim() === "") {
            alert("Por favor, ingrese su correo electronico.");
            return;
        }

        if (password.trim() === "") {
            alert("Por favor, ingrese una contraseña.");
            return;
        }

        if (confirmPassword.trim() === "") {
            alert("Por favor, confirme su contraseña.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        if (region === "") {
            alert("Por favor, seleccione una region.");
            return;
        }

        if (comuna === "") {
            alert("Por favor, seleccione una comuna.");
            return;
        }
        
        console.log("Los siguentes datos fueron guardados: ", { nombre, apellido, edad, correo, password, confirmPassword, region, comuna });

        alert("¡Registro hecho con exito!");
    }


    return (
        <>
            <Navbar />

            <main className="container mt-4 mb-5">
                <div className="text-center mb-4">
                    <img src="/img/logo.png" alt="Mil Sabores" />
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card shadow-sm p-4">

                            <h2 className="mb-4" style={{ fontFamily: 'Pacifico, cursive', color: '#6d4c41' }}>
                                SE PARTE DE NUESTROS SABORES
                            </h2>

                            <form onSubmit={registrar}>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="txtNombre">Nombre:</label>
                                        <input type="text" id="txtNombre" className="form-control" placeholder="Ej: Pedro Antonio" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="txtApellido">Apellido:</label>
                                        <input type="text" id="txtApellido" className="form-control" placeholder="Ej: Santos Quintos" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="txtEdad">Edad:</label>
                                        <input type="number" id="txtEdad" className="form-control" placeholder="Ingrese su edad" value={edad} onChange={(e) => setEdad(e.target.value)} required />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="txtCorreo">Correo Electronico:</label>
                                        <input type="email" id="txtCorreo" className="form-control" placeholder="Ej: AntonioQuinto@duocuc.cl" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="txtPassword">Contraseña:</label>
                                        <input type="password" id="txtPassword" className="form-control" placeholder="Ingrese su Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="txtConfirmPassword">Confirme Contraseña:</label>
                                        <input type="password" id="txtConfirmPassword" className="form-control" placeholder="Ingrese su Contraseña de nuevo" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="selRegion">Region:</label>
                                        <select id="selRegion" className="form-select" value={region} onChange={(e) => setRegion(e.target.value)} required>
                                            <option value="">Seleccione la region...</option>
                                            <option value="RM">Región Metropolitana</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="selComuna">Comuna:</label>
                                        <select id="selComuna" className="form-select" value={comuna} onChange={(e) => setComuna(e.target.value)} required>
                                            <option value="">Seleccione la comuna...</option>
                                            <option value="san_ramon">San Ramón</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <button type="button" onClick={registrar} className="btn text-white" style={{ backgroundColor: '#8B4513'}}>
                                        REGISTRARSE
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default RegistroUsuario;