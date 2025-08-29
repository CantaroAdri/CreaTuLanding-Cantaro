const Contactos = () => {
  return (
    <>
      <h1>Contacto</h1>
      <main>
        <h2 className="sub-titulo">
          Ponete en contacto con nosotros a través de nuestras Redes sociales o por WhatsApp
        </h2>
        <section id="icons-redes">
          <span>
            <img src="/img/imgLinks/icons-whatsapp.png" alt="WhatsApp" />
            <a href="#">WhatsApp </a>
            <span>11-2838-4015</span>
          </span>
          <span>
           <img src="/img/imgLinks/icons-instagram.png" alt="Instagram" />
            <a href="https://www.instagram.com/itali_cell">Instagram</a>
            <span>@Itali_Cell</span>
          </span>
          <span>
            <img src="/img/imgLinks/icons-facebook.png" alt="Facebook" />
            <a href="#">Facebook</a>
            <span>ItaliCell</span>
          </span>
        </section>
        <section>
          <h3 className="text-maps">También podes encontrarnos en Google Maps</h3>
        </section>
        <section id="maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.866104033132!2d-58.73275952578045!3d-34.60754717295291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbf38445ef87%3A0x202f472239985696!2sItalyCell!5e0!3m2!1ses-419!2sar!4v1740704777065!5m2!1ses-419!2sar"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>
      <footer>
        <i>
          En <strong>Italy Cell</strong>, somos expertos en la reparación de celulares, Notebook y Consolas. Ofrecemos un servicio completo, rápido y confiable para que puedas volver a disfrutar de tu dispositivo sin problemas.
        </i>
        <p>
          <strong>Podes contactarnos a nuestro whatsapp o por redes sociales</strong>
        </p>
        <img src="/img/imgLinks/icons-whatsapp.png" alt="WhatsApp" />
       <img src="/img/imgLinks/icons-instagram.png" alt="Instagram" />
      <img src="/img/imgLinks/icons-facebook.png" alt="Facebook" />
      </footer>
    </>
  );
};

export default Contactos;