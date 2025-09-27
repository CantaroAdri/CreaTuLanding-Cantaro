import { useState } from "react";
import Swal from "sweetalert2";

const CardComponent = ({ id, img, titulo, precio, Caracteristica, suma, resta }) => {
  const [num, setNum] = useState(0);

  const handleSuma = () => {
    setNum(num + 1);
    suma({ id, titulo, img, precio });
  };

  const handleResta = () => {
    if (num > 0) {
      setNum(num - 1);
      resta({ id, titulo });
    }
  };

  const handleVerProducto = () => {
    Swal.fire({
      title: titulo,
      imageUrl: img,
      imageWidth: 300,
      imageHeight: 350,
      imageAlt: "Imagen del producto",
      html: `
        <p><strong>Precio:</strong> $${precio}</p>
        <p><strong>Características:</strong> ${Caracteristica}</p>
      `,
    });
  };

  return (
    <div className="card h-100">
      <img src={img} className="card-img-top" alt={titulo} />
      <div className="card-body text-center">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text"><strong>Precio:</strong> ${precio}</p>
        <p className="card-text">{Caracteristica}</p>
        <div className="d-flex justify-content-center gap-2 mt-3">
          <button className="btn btn-primary" onClick={handleVerProducto}>
            Ver Producto
          </button>
          <button className="btn btn-success" onClick={handleSuma}>+</button>
          <button className="btn btn-danger" onClick={handleResta}>-</button>
          <input
            type="text"
            value={num}
            readOnly
            className="text-center"
            style={{ width: "50px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
