import React from "react";

export const UsPage = () => {
  return (
    <>
      <main>
        <div className="container py-4">
          <header className="pb-3 mb-4 border-bottom">
            <a
              href="/"
              className="d-flex align-items-center text-body-emphasis text-decoration-none"
            >
              <span className="fs-4">Nosotros</span>
            </a>
          </header>

          <div className="p-5 mb-4 bg-body-tertiary rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Historia</h1>
              <p className="col-md-8 fs-4">
              Fundamos SushiRonin en el 2010, con la visión de unir los sabores y vibraciones únicos de Perú y Japón.

Con un enfoque centrado en el uso de ingredientes de calidad y origen local, buscamos crear una experiencia premium para nuestros clientes.
              </p>
            </div>
          </div>

          <div className="row align-items-md-stretch">
            <div className="col-md-6">
              <div className="h-100 p-5 text-bg-dark rounded-3">
                <h2>Tradición</h2>
                <h4> Con las manos</h4>
                <p>
                  El sushi tal y como lo conocemos es un plato que se degusta
                  con las manos. Por tanto, no es necesario que nos peleemos con
                  los palillos si no queremos, aunque también es válido comerlo
                  con palillos.
                </p>
                <h4>De un bocado</h4>
                <p>
                  El sushi tiene un tamaño perfecto para comer de un solo
                  bocado, ¡a no ser que estemos ante un temaki! Desde luego, no
                  hay que partirlo con los palillos, si no queremos faltar a los
                  buenos modales en una mesa japonesa.
                </p>
                <h4>Salsa de soja</h4>
                <p>
                  No se baña en soja El sushi tiene un sabor delicado y
                  armonioso que podemos estropear si abusamos de la salsa de
                  soja. Se moja ligeramente y por el lado del pescado, para que
                  el arroz no se desmorone. Ya sabes algo más sobre el origen
                  del sushi que puedes usar para sorprender sobre tus
                  conocimientos sobre la historia de la cocina japonesa. Ya
                  sabes que en tu restaurante Miss Sushi favorito tenemos sushi
                  para que viajes por la historia: desde los sabores más
                  tradicionales a las combinaciones más originales y
                  contemporáneas. Conoce todas las variedades de Sushi de
                  nuestra carta.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="h-100 p-5 bg-danger text-light border rounded-3">
                <h2>Gastronomía Fusión</h2>
                <p>
                  Surge del interés por llevar la experiencia de la comida
                  asiática con fusion peruana-japonesa en un grato ambiente para
                  que puedas asistir en familia o con amigos. Creemos en
                  entregar variada carta donde podrás encontrar rolls, platos
                  fuertes, picoteos fríos y calientes, coctelería especializada
                  y tablas para compartir. Además de maravillosos postres para
                  endulzar tu vida. Nuestro principal objetivo es poder
                  disfrutar de distintos platos en un mismo lugar. ¡Ven y vive
                  la mejor experiencia de comida asiática en SushiRonin!
                </p>
              </div>
            </div>
          </div>

          <footer className="pt-3 mt-4 text-body-secondary border-top">
            © 2023
          </footer>
        </div>
      </main>
    </>
  );
};
