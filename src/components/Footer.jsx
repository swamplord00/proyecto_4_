import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="d-flex justify-content-around align-items-center mt-5 bg-secondary bg-gradient p-5 flex-wrap">
        <div className="container contact-area m-2">
          <h2>Contáctanos</h2>
          <form className="form">
            <input
              type="text"
              name="nombreContact"
              className="form-control mt-2"
              placeholder="Nombre"
            />
            <input
              type="email"
              name="emailContact"
              className="form-control mt-2"
              placeholder="Email"
            />
            <textarea
              name="mensaje"
              cols="20"
              rows="7"
              className="form-control mt-2"
              placeholder="Escribenos un mensaje..."
            ></textarea>
            <button type="submit" className="btn btn-light w-20 mt-2 ">
              Enviar
            </button>
          </form>
        </div>
        <div className="container d-flex flex-wrap gap-3  ">
          <div>
            <NavLink className="navbar-brand" to="/">
              <img
                src="/images/ronin.png"
                alt="SushiRonin"
                width="150"
                height="150"
              />
            </NavLink>
          </div>
          <div className="card p-2 bg-danger bg-gradient bg-gradient text-light flex-fill">
            <p className="text-light">Direccion: Calle ficticia #123</p>
            <p className="text-light">Antofagasta</p>
            <p className="text-light">Fono: +11 96969696</p>
          </div>
          <div className="map-area flex-fill w-100 h-100">
            <iframe className="w-100 h-100"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24176.994922677593!2d-73.90202769957703!3d40.759289326895654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25fa191b4692b%3A0xe573e64fb17e324a!2sJackson%20Heights%2C%20Queens%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1643211772666!5m2!1sen!2sbd"
            ></iframe>
          </div>
        </div>
      </div>
      <footer className="pt-3 mt-4 text-body-secondary border-top">
            © Para AMSA ♡
        </footer>
    </>
  );
};
