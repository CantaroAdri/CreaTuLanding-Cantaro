import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../fireBase";

const ItemListContainer = ({ carrito, setCarrito }) => {
  const [productos, setProductos] = useState([]);

  // Traer productos desde Firestore al cargar el componente
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const snapshot = await getDocs(collection(db, "items"));
        const productosData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          cantidad: 1 // cada producto inicia con cantidad 1
        }));
        setProductos(productosData);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProductos();
  }, []);

  // Función para agregar producto al carrito
  const agregarAlCarrito = (producto) => {
    const existe = carrito.find(item => item.id === producto.id);

    if (existe) {
      // Si ya existe, aumentamos la cantidad
      setCarrito(
        carrito.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  // Mostrar mensaje de carga si aún no hay productos
  if (!productos.length) {
    return <p className="text-center mt-4">Cargando productos...</p>;
  }

  return (
    <div className="container mt-4 d-flex flex-wrap gap-3">
      {productos.map((producto) => (
        <div key={producto.id} className="card" style={{ width: "18rem" }}>
          <img
            src={producto.imgSrc}
            className="card-img-top"
            alt={producto.title}
            style={{ height: "180px", objectFit: "cover" }}
          />
          <div className="card-body">
            <img src={producto.img} alt={producto.titulo} />
            <h5 className="card-title">{producto.titulo}</h5>
            <p className="card-text">${producto.precio}</p>
            <button
              className="btn btn-primary"
              onClick={() => agregarAlCarrito(producto)}
            >
              🛒 Agregar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
