import { useState, useEffect } from "react";
import CardComponent from "./CardComponent.jsx";

// Firebase
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAEXRHhrPV1xJ5lL_7r8uME4tmeo4ITEXA",
  authDomain: "italy-cell.firebaseapp.com",
  projectId: "italy-cell",
  storageBucket: "italy-cell.appspot.com",
  messagingSenderId: "456141198325",
  appId: "1:456141198325:web:291609d09382deeb1306bc",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ItemListContainer = ({ AgregarAlCarrito, QuitarDelCarrito }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "items"));
        const productosArray = [];
        querySnapshot.forEach((doc) => {
          productosArray.push({ id: doc.id, ...doc.data() });
        });
        setProductos(productosArray);
        setLoading(false);
      } catch (error) {
        console.error("Error cargando productos:", error);
      }
    };

    fetchProductos();
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center", marginTop: "20px" }}>Cargando productos...</p>;
  }

  return (
    <div className="container mt-4">
      <div className="row g-4">
        {productos.map((producto) => (
          <div key={producto.id} className="col-md-4">
            <CardComponent
              {...producto}
              suma={AgregarAlCarrito}
              resta={QuitarDelCarrito}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
