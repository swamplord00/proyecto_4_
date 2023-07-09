import { NavLink } from "react-router-dom";
import { auth, provider } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";

export const NavBar = ({ usuario, setUsuario }) => {
  const onLogin = () => {
    signInWithPopup(auth, provider).then(({ user }) => {
      setUsuario(user);
      console.log(user);
    });
  };
  const onLogOut=()=>{
    setUsuario(null)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid">
          <h4>SushiRonin</h4>
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              <img
                src="/images/ronin.png"
                alt="SushiRonin"
                width="60"
                height="60"
              />
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
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

              {usuario ? (
                <>
                  <img
                    src={usuario.photoURL}
                    alt="avatar"
                    className="rounded-circle w-25 h-25"
                  />
                  <li className="nav-item">{usuario.displayName}</li>
                  <li className="nav-item" onClick={onLogOut}>
                    <a className="nav-link text-danger">Logout</a>
                  </li>
                </>
              ) : (
                <li className="nav-item" onClick={onLogin}>
                  <a className="nav-link">Login</a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
