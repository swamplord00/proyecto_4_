import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          ¡Ven a visitarnos y prueba los mejores Rolls y Nigiris!
        </div>
      </div>
      {/* <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/5.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}


      <main role="main">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1" className="">

            </li>
            <li data-target="#myCarousel" data-slide-to="2" className="">

            </li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="first-slide"
                src="/images/1.jpg"
                alt="First slide"
              />
              <div className="container">
                <div className="carousel-caption text-left">
                    <div className="card bg-dark text-light p-5">

                  <h1 >Bienvenido a SushiRonin Restaurant</h1>
                  <p className="text-danger">
                    Regístrate y reserva tu mesa en línea.
                  </p>
                  <p>
                    <Link 
                      to="/reserva"
                      className=" nav-link btn btn-info "
                      href="#"
                      role="button"
                    >
                      Reservas
                    </Link>
                  </p>

                    </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="second-slide"
                src="/images/2.jpg"
                alt="Second slide"
              />
              <div className="container">
                <div className="carousel-caption">
                  <h1>Conoce nuestro origen y tradición.</h1>
                  <p>
                    Lo que encuentras bajo la experiencia culinaria.
                  </p>
                  <p>
                    <a
                      className="btn btn-lg btn-primary"
                      href="#"
                      role="button"
                    >
                      Leer más
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="third-slide"
                src="/images/5.jpg"
                alt="Third slide"
              />
              <div className="container">
                <div className="carousel-caption text-right">
                  <h1>Carta</h1>
                  <p>
                    Prueba todos nuestras creaciones.
                  </p>
                  <p>
                    <a
                      className="btn btn-lg btn-primary"
                      href="#"
                      role="button"
                    >
                      Menú
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Anterior</span>
          </a>
          <a
            className="carousel-control-next"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Siguiente</span>
          </a>
        </div>

        {/* <div className="container marketing">
          <div className="row">
            <div className="col-lg-4">
              <img
                className="rounded-circle"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                alt="Generic placeholder image"
                width="140"
                height="140"
              />
              <h2>Heading</h2>
              <p>
                Donec sed odio dui. Etiam porta sem malesuada magna mollis
                euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna.
              </p>
              <p>
                <a className="btn btn-secondary" href="#" role="button">
                  View details »
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <img
                className="rounded-circle"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                alt="Generic placeholder image"
                width="140"
                height="140"
              />
              <h2>Heading</h2>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem nec elit. Cras mattis consectetur purus
                sit amet fermentum. Fusce dapibus, tellus ac cursus commodo,
                tortor mauris condimentum nibh.
              </p>
              <p>
                <a className="btn btn-secondary" href="#" role="button">
                  View details »
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <img
                className="rounded-circle"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                alt="Generic placeholder image"
                width="140"
                height="140"
              />
              <h2>Heading</h2>
              <p>
                Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Vestibulum id ligula porta felis euismod
                semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
              <p>
                <a className="btn btn-secondary" href="#" role="button">
                  View details »
                </a>
              </p>
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                First featurette heading.{" "}
                <span className="text-muted">It'll blow your mind.</span>
              </h2>
              <p className="lead">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="featurette-image img-fluid mx-auto"
                data-src="holder.js/500x500/auto"
                alt="500x500"
                style="width: 500px; height: 500px;"
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1893e0b8ab1%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1893e0b8ab1%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.125%22%20y%3D%22261.2800006866455%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                data-holder-rendered="true"
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">
                Oh yeah, it's that good.{" "}
                <span className="text-muted">See for yourself.</span>
              </h2>
              <p className="lead">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                className="featurette-image img-fluid mx-auto"
                data-src="holder.js/500x500/auto"
                alt="500x500"
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1893e0b8ab2%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1893e0b8ab2%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.125%22%20y%3D%22261.2800006866455%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                data-holder-rendered="true"
                style="width: 500px; height: 500px;"
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                And lastly, this one.{" "}
                <span className="text-muted">Checkmate.</span>
              </h2>
              <p className="lead">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="featurette-image img-fluid mx-auto"
                data-src="holder.js/500x500/auto"
                alt="500x500"
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1893e0b8ab3%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1893e0b8ab3%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.125%22%20y%3D%22261.2800006866455%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                data-holder-rendered="true"
                style="width: 500px; height: 500px;"
              />
            </div>
          </div>

          <hr className="featurette-divider" />
        </div> */}
      </main>
    </>
  );
};
