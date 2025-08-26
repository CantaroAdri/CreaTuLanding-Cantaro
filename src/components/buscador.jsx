const Buscador = ({ buscar, onInputChange, onBuscar }) => {
  return (
    <div className="buscador" style={{ padding: "20px", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Buscar Producto"
        value={buscar}
        onChange={onInputChange}
      />
      <button
        className="btn btn-warning"
        style={{ margin: "10px" }}
        onClick={onBuscar}
      >
        Buscar
      </button>
    </div>
  );
};

export default Buscador;