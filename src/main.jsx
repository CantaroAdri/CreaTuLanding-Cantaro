import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// ...existing code...
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// ...existing code...

import "./App.css";

// ...tu componente...
import CardComponent from "./components/CardComponent.jsx";
import Navbar from "./components/navBar.jsx";
import TextField from "./components/TextField.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <ItemListContainer />
  </StrictMode>
);
