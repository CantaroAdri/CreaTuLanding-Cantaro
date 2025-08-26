import { useState } from "react";
import TextField from "./TextField.jsx";
import Swal from 'sweetalert2';

const CardComponent = ({ imgSrc, title, text, Precio, Características, suma, resta, id }) => {
  const [num, setNum] = useState(0);

  const handleSuma = () => {
    setNum(num + 1);
    suma({ id, title, imgSrc, Precio });
  };

  const handleResta = () => {
    if (num > 0) {
      setNum(num - 1);
      resta({ id, title });
    }
  };

  return (
    <div className="card" style={{ width: 18 + "rem" }}>
      <img src={imgSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <p className="card-text">{Precio}</p>
        {/* <span className="card-text">{Características}</span> */}

        <button
          className="btn btn-primary"
          onClick={() => {
            Swal.fire({
              title: title,              
              imageUrl: imgSrc,
              imageWidth: 300,
              imageHeight: 350,
              imageAlt: "Custom image",
              html: `
                <p><strong>Precio:</strong> ${Precio}</p>
                <p><strong>Características:</strong> ${Características}</p>
                <p>${text}</p>
  `,
});
            // alert(`Producto : ${title},\nPrecio: ${Precio},\nDescripcion: ${text},\n${Características}  `);
          }}
        >
          Ver Producto
        </button>

        <button
          className="btn btn-danger"
          onClick={handleSuma}
        >
          +
        </button>

        <button className="btn btn-danger" 
        onClick={handleResta}>
          -
        </button>

        <TextField
          name="nameCarts"
          type="text"
          id="idCarts"
          value={num}
          readOnly
        />
      </div>
    </div>
  );
};
export default CardComponent;
