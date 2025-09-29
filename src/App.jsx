import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/linkBotones/home.jsx";
import ProductoDetalle from "./components/DetalleProducto.jsx";
import Carrito from "./components/Carrito.jsx";
import Quienes from "./components/linkBotones/Quienes.jsx";
import Contactos from "./components/linkBotones/Contactos.jsx";
import InicioSesion from "./components/linkBotones/InicioSesion.jsx";
import ItemListContainer from "./components/ItemListContainer"; 



function App() {
  const [carrito, setCarrito] = React.useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === producto.id);
      if (existe) {
        return prev.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const quitarDelCarrito = (producto) => {
    setCarrito((prev) =>
      prev
        .map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  return (
    <Router>
      <NavBar carrito={carrito} />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer carrito={carrito} setCarrito={setCarrito} />
          }
        />
        <Route
          path="/carrito"
          element={<Carrito carrito={carrito} setCarrito={setCarrito} />}
        />
        <Route
          path="/"
          element={
            <Home
              agregarAlCarrito={agregarAlCarrito}
              quitarDelCarrito={quitarDelCarrito}
            />
          }
        />
        <Route
          path="/producto/:id"
          element={<ProductoDetalle carrito={carrito} setCarrito={setCarrito} />}
        />
        <Route path="/carrito" element={<Carrito carrito={carrito} />} />
        <Route path="/Quienes" element={<Quienes />} />
        <Route path="/Contactos" element={<Contactos />} />
        <Route path="/InicioSesion" element={<InicioSesion />} />
        
      </Routes>
    </Router>
  );
}

export default App;
