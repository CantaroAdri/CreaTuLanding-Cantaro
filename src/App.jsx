import { useState } from "react";

// ...Mis componentes...
import Navbar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import Buscador from "./components/buscador.jsx";

const App = () => {
  const [carrito, setCarrito] = useState(0);

  const sumarAlCarrito = () => setCarrito(carrito + 1);
  const restarDelCarrito = () => setCarrito(carrito > 0 ? carrito - 1 : 0);

  return (
    <>
      <Navbar carrito={carrito} />
      <Buscador />
      {/* Pasar las funciones como props */}
      <ItemListContainer
        AgregarAlCarrito={sumarAlCarrito}
        QuitarDelCarrito={restarDelCarrito}
      />
    </>
  );
};

export default App;
