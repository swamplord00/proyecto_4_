import {NavLink} from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img src="/images/ronin.png" alt="RoninSushi" width="60" height="60"/>
                </NavLink>
            </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/menu">
                  Menú
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/reserva">
                    Reserva
                </NavLink>
              </li>
              
              <li className="nav-item">
                <a className="nav-link disabled">Login</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  );
};
