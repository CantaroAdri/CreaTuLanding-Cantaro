import { useState } from "react";
import CardComponent from "./CardComponent.jsx";
import ItemListContainer from "./ItemListContainer.jsx";

const NavBar = ({ carrito }) => {
  const [carrito, setCarrito] = useState([]);
  return (
    <>
      <div id="menuNav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              ITALY CELL
            </a>
            <a className="navbar-brand" href="#">
              <img
                src="/img/logoEmpresa.jpg"
                alt="logo de la empresa"
                width="40"
                height="40"
                className="d-inline-block align-text-top"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Quienes Somos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Reparaciones
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contactos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Inicio de sesion
                  </a>
                </li>
              </ul>

              {/* Carrito de compras */}
           </div>  
           
    </>

export default NavBar;
