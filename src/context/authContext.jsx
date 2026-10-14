import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const leer = (clave, valorPorDefecto) => {
  try {
    return JSON.parse(localStorage.getItem(clave)) ?? valorPorDefecto;
  } catch {
    return valorPorDefecto;
  }
};

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(() => leer("sesion", null));

  // Cada vez que cambia la sesión, se guarda o se borra de localStorage
  useEffect(() => {
    if (usuario) localStorage.setItem("sesion", JSON.stringify(usuario));
    else localStorage.removeItem("sesion");
  }, [usuario]);

  // datos: { nombre, apellidos, email, password }
  const registrar = (datos) => {
    const usuarios = leer("usuarios", []);
    if (usuarios.some((u) => u.email === datos.email)) {
      return { ok: false, error: "Ese correo ya está registrado" };
    }
    usuarios.push({ ...datos, rol: "cliente" });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    return { ok: true };
  };

  const login = (email, password) => {
    const encontrado = leer("usuarios", []).find(
      (u) => u.email === email && u.password === password
    );
    if (!encontrado) return { ok: false, error: "Correo o contraseña incorrectos" };

    // A la sesión se guarda todo menos la contraseña
    const { password: _omitida, ...sinPassword } = encontrado;
    setUsuario(sinPassword);
    return { ok: true };
  };

  const logout = () => setUsuario(null);

  return (
    <AuthContext.Provider value={{ usuario, registrar, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}