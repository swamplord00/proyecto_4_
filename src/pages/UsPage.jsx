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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab debitis quasi voluptatem molestias? Et labore cupiditate debitis natus consequatur, deleniti odio impedit modi vitae consequuntur illum. Perspiciatis, labore numquam.
              </p>
              
            </div>
          </div>

          <div className="row align-items-md-stretch">
            <div className="col-md-6">
              <div className="h-100 p-5 text-bg-dark rounded-3">
                <h2>Tradición</h2>
                <p>
                  Swap the background-color utility and add a `.text-*` color
                  utility to mix up the jumbotron look. Then, mix and match with
                  additional component themes and more.
                </p>
                
              </div>
            </div>
            <div className="col-md-6">
              <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                <h2>Gastronomía Fusión</h2>
                <p>
                Surge del interés por llevar la experiencia de la comida asiática con fusion peruana-japonesa en un grato ambiente para que puedas asistir en familia o con amigos.

Creemos en entregar variada carta donde podrás encontrar rolls, platos fuertes, picoteos fríos y calientes, coctelería especializada y tablas para compartir. Además de maravillosos postres para endulzar tu vida.

Nuestro principal objetivo es poder disfrutar de distintos platos en un mismo lugar.

¡Ven y vive la mejor experiencia de comida asiática en SushiRonin!
                </p>
                <button className="btn btn-outline-secondary" type="button">
                  Example button
                </button>
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
