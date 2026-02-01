import { Link } from "react-router-dom";
import styleNavbar from "./Navbar.module.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { total } = useContext(CartContext);
  const { token, setToken, logout } = useUser();

  function registroProfilII() {
    setToken(false);
  }

  return (
    <>
      <nav className={styleNavbar.Navbar}>
        <h2>pizzeria Mamma Mia♥</h2>

        <div>
          <Link to="/" onClick={registroProfilII}>
            Home
          </Link>

          {token ? (
            <>
              <Link to="/loginPage" className={styleNavbar.formulario}>
                Login
              </Link>
              <Link to="/registerPage" className={styleNavbar.formulario}>
                Registrer
              </Link>
            </>
          ) : (
            <>
              <Link to="/profile">Profile</Link>
              <button onClick={logout}>Logout</button>
            </>
          )}
        </div>
        <Link to="/cart">Total ${total.toLocaleString("es-CL")}</Link>
      </nav>
    </>
  );
};

export default Navbar;
