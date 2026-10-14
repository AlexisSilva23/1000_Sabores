function CampoFormulario({ etiqueta, nombre, error, requerido = false, children, ...props }) {
  return (
    <div className="mb-3">
      <label htmlFor={nombre} className="form-label">
        {etiqueta}
        {requerido && <span className="text-danger"> *</span>}
      </label>
      {children ?? (
        <input
          id={nombre}
          name={nombre}
          className={`form-control ${error ? "is-invalid" : ""}`}
          {...props}
        />
      )}
      {error && <div className="invalid-feedback d-block">{error}</div>}
    </div>
  );
}

export default CampoFormulario;