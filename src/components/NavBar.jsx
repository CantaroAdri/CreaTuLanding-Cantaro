import { Link } from "react-router-dom";

const NavBar = ({ carrito }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">ITALY CELL</Link>

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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/Quienes">Quienes Somos</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/Contactos">Contactos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/InicioSesion">Inicio de Sesión</Link>
            </li>
          </ul>

          {/* Carrito simple */}
          <Link to="/carrito" className="btn btn-outline-primary">
            🛒 {carrito.reduce((acc, item) => acc + item.cantidad, 0)}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
