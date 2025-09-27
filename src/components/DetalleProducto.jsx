// src/components/DetalleProducto.jsx
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductos } from "../fireBase";

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      const productos = await getProductos();
      const encontrado = productos.find(p => p.id === id);
      setProducto(encontrado);
    };
    fetchProducto();
  }, [id]);

  if (!producto) return <p className="text-center mt-4">Cargando producto...</p>;

  return (
    <div className="container mt-4 text-center">
      <h2>{producto.title}</h2>
      <img src={producto.imgSrc} alt={producto.title} className="img-fluid mb-3"/>
      <p>{producto.text}</p>
      <p><strong>{producto.Precio}</strong></p>
      {producto.Características && <p>{producto.Características}</p>}
    </div>
  );
};

export default DetalleProducto;
