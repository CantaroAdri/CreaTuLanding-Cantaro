import { useState } from "react";
import Navbar from "./components/NavBar.jsx";
import ItemListContainer, { productos } from "./components/ItemListContainer.jsx";
import Buscador from "./components/buscador.jsx";
import Quienes from "./components/linkBotones/Quienes.jsx";
import InicioSesion from "./components/linkBotones/InicioSesion.jsx";
import Contactos from "./components/linkBotones/Contactos.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardComponent from "./components/CardComponent.jsx";

const App = () => {
  const [carrito, setCarrito] = useState([]);
  const [buscar, setBuscar] = useState("");
  const [resultado, setResultado] = useState(null);
  const [buscado, setBuscado] = useState(false);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === producto.id);
      if (existe) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const quitarDelCarrito = (producto) => {
    setCarrito((prev) =>
      prev
        .map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  // Función para buscar producto
  const handleBuscar = () => {
    const producto = productos.find(
      (item) => item.title.toLowerCase().includes(buscar.toLowerCase())
    );
    setResultado(producto || null);
    setBuscado(true);
  };

  // Reinicia búsqueda al cambiar input
  const handleInputChange = (e) => {
    setBuscar(e.target.value);
    setBuscado(false);
    setResultado(null);
  };

  return (
    <BrowserRouter>
      <Navbar carrito={carrito} />
      <Buscador
        buscar={buscar}
        onInputChange={handleInputChange}
        onBuscar={handleBuscar}
      />
      <Routes>
        <Route path="/Quienes" element={<Quienes />} />
        <Route path="/InicioSesion" element={<InicioSesion />} />
        <Route path="/Contactos" element={<Contactos />} />
        <Route
          path="/"
          element={
            !buscado ? (
              <ItemListContainer
                AgregarAlCarrito={agregarAlCarrito}
                QuitarDelCarrito={quitarDelCarrito}
              />
            ) : resultado ? (
              <CardComponent
                {...resultado}
                suma={agregarAlCarrito}
                resta={quitarDelCarrito}
              />
            ) : (
              <div style={{ padding: "20px", textAlign: "center" }}>
                <p>No se encontró el producto.</p>
              </div>
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;