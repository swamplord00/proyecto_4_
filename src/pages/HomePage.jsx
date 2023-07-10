import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          ¡Ven a visitarnos y prueba los mejores Rolls y Nigiris!
        </div>
      </div>

      <div className="card p-2">

      <div className="card bg-dark text-white">
        <img src="/images/cr2.jpeg" className="card-img" alt="bg sushi" />
        <div className="card-img-overlay">
          <h5 className="card-title">Bienvenido a SushiRonin Restaurant</h5>
          <p className="card-text">Inicia una sesión con tu email y reserva tu mesa en línea.</p>
          
        </div>
      </div>

      </div>

      <div className="card bg-dark text-white">
        <img src="/images/cr1.jpeg" className="card-img" alt="bg sushi" />
        <div className="card-img-overlay">
          <h5 className="card-title">Ven a visitarnos</h5>
          <p className="card-text">¡Haz tu mesa en línea!</p>
          <button className="btn btn-info">
            <Link
              to="/reserva"
              className=" nav-link  "
              href="#"
              role="button"
            >
              Reservas
            </Link>
          </button>
        </div>
      </div>



      
    </>
  );
};
