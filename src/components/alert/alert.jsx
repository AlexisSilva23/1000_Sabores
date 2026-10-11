import { useEffect } from "react";

function Alerta({mensaje, tipo = "success", onCerrar, duracion = 3000}) {
    useEffect(() => {
        if(!mensaje) return;
        const timer = setTimeout(onCerrar, duracion);
        return () => clearTimeout(timer);
    }, [mensaje,onCerrar, duracion]);

    if(!mensaje) return null;

    return (
        <div className={`alerta alert-${tipo} alert-dismissible shadow mt-3`} role="alert">
            {mensaje}
            <button type="button" className="btn-close" aria-label="Close" onClick={onCerrar}></button>
        </div>
    );
}
export default Alerta;