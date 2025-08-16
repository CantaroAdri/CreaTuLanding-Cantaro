import { useState } from "react";
import TextField from "./TextField.jsx";

const CardComponent = ({ imgSrc, title, text, Precio, suma, resta, id }) => {
  const [num, setNum] = useState(0);

  const handleSuma = () => {
    setNum(num + 1);
    suma();
  };

  const handleResta = () => {
    if (num > 0) {
      setNum(num - 1);
      resta();
    }
  };

  return (
    <div className="card" style={{ width: 18 + "rem" }}>
      <img src={imgSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <p className="card-text">{Precio}</p>
        <button
          className="btn btn-primary"
          onClick={() =>
            alert(
              "producto : " +
                title +
                "\n" +
                "cantidad : " +
                num +
                "\n" +
                "Agregado al Carrito!!"
            )
          }
        >
          Comprar
        </button>
        <br />

        <button className="btn btn-danger" onClick={handleSuma}>
          +{" "}
        </button>

        <TextField
          name="nameCarts"
          type="text"
          id="idCarts"
          value={num}
          readOnly
        />

        <button className="btn btn-danger" onClick={handleResta}>
          {" "}
          -{" "}
        </button>
      </div>
    </div>
  );
};
export default CardComponent;
