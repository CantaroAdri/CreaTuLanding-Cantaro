import "./link.css";

const InicioSesion = () => {
  return (
    <>
      <h1>Inicio de Sesion</h1>
      <main id="main-container">
        <h2 className="sub-titulo">
          Completa el formulario, registrate, obtene descuentos y beneficios
        </h2>

        <form id="formulario" className="row g-3 needs-validation" noValidate>
          <section className="col-md-4 position-relative">
            <label htmlFor="validationTooltip01" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="validationTooltip01"
              required
            />
            <div className="valid-tooltip">Looks good!</div>
          </section>

          <section className="col-md-4 position-relative">
            <label htmlFor="validationTooltip02" className="form-label">Apellido</label>
            <input
              type="text"
              className="form-control"
              id="validationTooltip02"
              required
            />
            <div className="valid-tooltip">Looks good!</div>
          </section>

          <section className="col-md-4 position-relative">
            <label htmlFor="validationTooltipUsername" className="form-label">E-Mail</label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
              <input
                type="text"
                className="form-control"
                id="validationTooltipUsername"
                aria-describedby="validationTooltipUsernamePrepend"
                required
              />
              <div className="invalid-tooltip">
                Please choose a unique and valid username.
              </div>
            </div>
          </section>

          <section className="col-md-6 position-relative">
            <label htmlFor="validationTooltip03" className="form-label">Ciudad</label>
            <input
              type="text"
              className="form-control"
              id="validationTooltip03"
              required
            />
            <div className="invalid-tooltip">Please provide a valid city.</div>
          </section>

          <section className="col-md-3 position-relative">
            <label htmlFor="validationTooltip04" className="form-label">Pais</label>
            <select className="form-select" id="validationTooltip04" required>
              <option value="" disabled selected>Elija...</option>
              <option>Argentina</option>
              <option>Chile</option>
              <option>Uruguay</option>
            </select>
            <div className="invalid-tooltip">Please select a valid state.</div>
          </section>

          <section className="col-md-3 position-relative">
            <label htmlFor="validationTooltip05" className="form-label">C.P</label>
            <input
              type="text"
              className="form-control"
              id="validationTooltip05"
              required
            />
            <div className="invalid-tooltip">Please provide a valid zip.</div>
          </section>

          <div className="col-12">
            <button id="enviar" className="btn btn-primary" type="submit">
              Enviar Formulario
            </button>
          </div>
        </form>
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

export default InicioSesion;