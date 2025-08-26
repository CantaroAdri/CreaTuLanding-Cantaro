import CardComponent from "./CardComponent.jsx";

// src/components/Contenedor.jsx

  export const productos = [
    {
      id: 1,
      imgSrc: "/img/fotoModulos/a03.jpg",
      title: "Modelo A03",
      text: "compatibles con A03/A02s/A03s/A04e.",
      Precio: "Precio: $12.000",
    },
    {
      id: 2,
      imgSrc: "/img/fotoModulos/A04.jpg",
      title: "Modelo A04",
      text: "modelo A04.",
      Precio: "Precio: $13.500",
      Características :  "Compatibilidad perfecta: Diseñado exclusivamente para el Samsung A04, asegurando un ajuste preciso. - Instalación sencilla: Perfecto tanto para profesionales como para entusiastas que desean realizar reparaciones sin complicaciones. - Calidad asegurada: Cada módulo es sometido a rigurosas pruebas para garantizar su óptimo funcionamiento."

    },
    {
      id: 3,
      imgSrc: "/img/fotoModulos/A02.jpg",
      title: "Modelo A02",
      text: "compatibles con A02/A12/M12.",
      Precio: "Precio: $12.000",
    },

    {
      id: 4,
      imgSrc: "/img/fotoModulos/A01.jpg",
      title: "Modelo A01",
      text: "modelo A01 Flex largo.",
      Precio: "Precio: $12.000",
    },
    {
      id: 5,
      imgSrc: "/img/fotoModulos/A05.webp",
      title: "Modelo A05",
      text: "modelo A05.",
      Precio: "Precio: $14.000",
    },
    {
      id: 6,
      imgSrc: "/img/fotoModulos/A10.webp",
      title: "Modelo A10",
      text: "modelo A10.",
      Precio: "Precio: $13.500",
    },
    {
      id: 7,
      imgSrc: "/img/fotoModulos/A10s.webp",
      title: "Modelo A10s",
      text: "modelo A10s.",
      Precio: "Precio: $12.500",
    },
    {
      id: 8,
      imgSrc: "/img/fotoModulos/A11.webp",
      title: "Modelo A11",
      text: "modelo A11.",
      Precio: "Precio: $14.000",
    },
    {
      id: 9,
      imgSrc: "/img/fotoModulos/A13-universal.png",
      title: "Modelo A13 Universal",
      text: "Compatible con A13/A23/M23/M33.",
      Precio: "Precio: $16.000",
    },
  ];

  const ItemListContainer = ({ AgregarAlCarrito, QuitarDelCarrito }) => {
  return (
    <section id="tarjetas" className="p-6 text-center">
      {productos.map((producto, index) => (
        <CardComponent
          key={index}
          {...producto}
          suma={AgregarAlCarrito}
          resta={QuitarDelCarrito}
        />
      ))}
    </section>
  );
};

export default ItemListContainer;
