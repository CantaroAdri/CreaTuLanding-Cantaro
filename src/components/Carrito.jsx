// src/components/Carrito.jsx
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../fireBase";


const Carrito = ({ carrito, setCarrito }) => {
  const quitarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => setCarrito([]);

  const finalizarCompra = async () => {
    if (carrito.length === 0) return alert("El carrito está vacío ❌");

    try {
      // Guardar la orden en Firestore
      await addDoc(collection(db, "orders"), {
        items: carrito,
        fecha: serverTimestamp(),
      });

      alert("✅ Compra finalizada con éxito");
      vaciarCarrito();
    } catch (error) {
      console.error("Error al finalizar compra:", error);
      alert("❌ Ocurrió un error al registrar la compra");
    }
  };

  if (carrito.length === 0) {
    return <h2 className="text-center mt-4">El carrito está vacío 🛒</h2>;
  }

  return (
    <div className="container mt-4">
      <h2>Carrito de Compras</h2>
      <ul className="list-group mb-3">
        {carrito.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              <img
                src={item.img}
                alt={item.titulo}
                width="50"
                style={{ marginRight: "10px" }}
              />
              {item.titulo} - ${item.precio}
            </span>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => quitarDelCarrito(item.id)}
            >
              ❌ Quitar
            </button>
          </li>
        ))}
      </ul>

      {/* Botón de finalizar compra */}
      <div className="d-flex justify-content-end">
        <button className="btn btn-success" onClick={finalizarCompra}>
          ✅ Finalizar Compra
        </button>
      </div>
    </div>
  );
};

export default Carrito;
