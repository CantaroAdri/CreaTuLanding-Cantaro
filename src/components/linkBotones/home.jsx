// src/components/Home.jsx
import { useState, useEffect } from "react";
import { getProductos } from "../../fireBase.js";
import CardComponent from "../CardComponent.jsx";

const Home = ({ agregarAlCarrito, quitarDelCarrito }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await getProductos();
        setProductos(data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductos();
  }, []);

  if (loading) return <p className="text-center mt-4">Cargando productos...</p>;

  return (
    <div className="container mt-4">
      <h1 className="text-center">Productos</h1>
      <div className="row">
        {productos.map((producto) => (
          <div key={producto.id} className="col-md-4 mb-3">
            <CardComponent
              {...producto}
              suma={agregarAlCarrito}
              resta={quitarDelCarrito}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
