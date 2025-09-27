// src/components/Carrito.jsx
const Carrito = ({ carrito, setCarrito }) => {
  const quitarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  if (carrito.length === 0) {
    return <h2 className="text-center mt-4">El carrito está vacío 🛒</h2>;
  }

  return (
    <div className="container mt-4">
      <h2>Carrito de Compras</h2>
      <ul className="list-group">
        {carrito.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>
              <img src={item.imgSrc} alt={item.title} width="50" style={{ marginRight: "10px" }} />
              {item.title} - {item.Precio}
            </span>
            <button className="btn btn-danger btn-sm" onClick={() => quitarDelCarrito(item.id)}>
              ❌ Quitar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carrito;
