import { useState } from "react";

import TextField from "./TextField.jsx";

const CardComponent = ({ imgSrc, title, text }) => {
  const [num, setNum] = useState(0);

  const suma = () => {
    setNum(num + 1);
  };

  const resta = () => {
    setNum(num - 1);
  };

  return (
    <div className="card" style={{ width: 18 + "rem" }}>
      <img src={imgSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <button className="btn btn-primary">Comprar</button>
        <br />

        <button className="btn btn-danger" onClick={suma}>
          +{" "}
        </button>

        <TextField
          name="nameCarts"
          type="text"
          id="idCarts"
          value={num}
          readOnly
        />

        <button className="btn btn-danger" onClick={resta}>
          {" "}
          -{" "}
        </button>
      </div>
    </div>
  );
};
export default CardComponent;
