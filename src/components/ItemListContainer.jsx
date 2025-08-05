import CardComponent from "./CardComponent.jsx";

// src/components/Contenedor.jsx
const ItemListContainer = ({ mensaje }) => {
  return (
    <section id="tarjetas" className="p-6 text-center">
      <CardComponent
        imgSrc="/img/fotoModulos/a03.jpg"
        title="Modelo de pantalla A03"
        text="compatibles con A03/A02s/A03s/A04e."
      />
      <CardComponent
        imgSrc="/img/fotoModulos/A04.jpg"
        title="Modelo de pantalla A04"
        text="modelo A04."
      />
      <CardComponent
        imgSrc="/img/fotoModulos/A02.jpg"
        title="Modelo de pantalla A02"
        text="compatibles con A02/A12/M12."
      />
      <CardComponent
        imgSrc="/img/fotoModulos/A01.jpg"
        title="Modelo de pantalla A01"
        text="modelo A01 Flex largo."
      />
      <CardComponent
        imgSrc="/img/fotoModulos/A05.webp"
        title="Modelo de pantalla A05"
        text="modelo A05."
      />
      <CardComponent
        imgSrc="/img/fotoModulos/A10.webp"
        title="Modelo de pantalla A10"
        text="modelo A10."
      />
      <CardComponent
        imgSrc="/img/fotoModulos/A10s.webp"
        title="Modelo de pantalla A10"
        text="modelo A10."
      />
      <CardComponent
        imgSrc="/img/fotoModulos/A11.webp"
        title="Modelo de pantalla A11"
        text="modelo A11."
      />
      <CardComponent
        imgSrc="/img/fotoModulos/A13-universal.png"
        title="Modelo de pantalla A13 Universal"
        text="Compatible con A13/A23/M23/M33."
      />
    </section>
  );
};

export default ItemListContainer;
