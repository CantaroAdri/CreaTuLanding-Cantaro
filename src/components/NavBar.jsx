import { useState } from "react";
import { Link } from "react-router-dom";
import ItemListContainer from "./ItemListContainer.jsx";
import Quienes from "./linkBotones/Quienes.jsx";
import InicioSesion from "./linkBotones/InicioSesion.jsx";
import Contactos from "./linkBotones/Contactos.jsx";


const NavBar = ({ carrito }) => {
  
  return (
    <>
      {/* NAVBAR */}
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
                    
                 <Link className="nav-link" to="/">Home</Link>
                  
                </li>
                <li className="nav-item">
                    
                 <Link className="nav-link" to="/Quienes">Quienes Somos</Link>
                  
                </li>
                <li className="nav-item">
                                   
                  <Link className="nav-link" to="/Contactos">Contactos</Link>

                </li>
                <li className="nav-item">
                  
                  <Link className="nav-link" to="/InicioSesion">Inicio de sesion</Link>

                </li>
                
              </ul>

              {/* CARRITO */}
              <div className="d-flex align-items-center">
                <a
                  href="#"
                  className="nav-link position-relative"
                  data-bs-toggle="modal"
                  data-bs-target="#carritoModal"
                >
                  🛒
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {carrito.reduce((acc, item) => acc + item.cantidad, 0)}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* MODAL CARRITO */}
      <div
        className="modal fade"
        id="carritoModal"
        tabIndex="-1"
        aria-labelledby="carritoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="carritoModalLabel">
                🛒 Tu Carrito
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Cerrar"
              ></button>
            </div>
            <div className="modal-body">
              {carrito.length > 0 ? (
                <ul className="list-group">
                  {carrito.map((item) => (
                    <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <span>
                        <img
                          src={item.imgSrc}
                          alt={item.title}
                          style={{ width: "40px", marginRight: "10px" }}
                        />
                        {item.title}
                      </span>
                      <span>
                        Cantidad: {item.cantidad} | Precio: {item.Precio}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No hay productos en el carrito.</p>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" className="btn btn-success">
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default NavBar;
