import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import './login.css';

const KEY_STORAGE = 'login_storage';

function Login() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(correo);
    console.log(password);

    if (correo === '') {
      alert('El Correo no puede estar vacio');
      return;
    } else if (password === '') {
      alert('La contraseña no puede estar vacia');
      return;
    }

    const objeto_login = [
      {
        correo: correo,
        password: password,
      },
    ];

    localStorage.setItem(KEY_STORAGE, JSON.stringify(objeto_login));

    const storage = localStorage.getItem(KEY_STORAGE);
    console.log(JSON.parse(storage));

    alert('Inicio de sesión guardado con éxito');
    navigate('/admin');
  };

  return (
    <>
      <Navbar />

      <main className="container mt-4 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <img src="/img/logo.png" alt="Logo" className="logo_img" />
                <h2 className="Titulo_formulario text-center mb-4">PASTELERIA MIL SABORES</h2>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label id="lblCorreo" htmlFor="correo" className="form_label">
                      Correo electronico
                    </label>
                    <input
                      id="correo"
                      className="form-control"
                      type="text"
                      placeholder="Ej: Pedritoclavounclavito@duocuc.cl"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label id="lblPassword" htmlFor="password" className="form-label">
                      Contraseña
                    </label>
                    <input
                      id="password"
                      className="form-control"
                      type="text"
                      placeholder="Ej: 123456789"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <div className="d-grid">
                      <button className="btn btn-dark btn-lg" type="submit">
                        INICIAR SESION
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;