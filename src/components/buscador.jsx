import ItemListContainer from "./ItemListContainer";

const Buscador = () => {
  return (
    <div className="buscador" style={{ padding: "20px", textAlign: "center" }}>
      <input type="text" placeholder="Buscar Producto" />

      <button className="btn btn-warning" style={{ margin: "10px" }}>
        Buscar
      </button>
    </div>
  );
};

export default Buscador;
