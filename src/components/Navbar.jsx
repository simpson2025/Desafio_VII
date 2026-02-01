import { Link } from "react-router-dom";
import { useContext } from "react";
import styleNavbar from "./Navbar.module.css";
import { CartContext } from "../context/CartContext";
import { useUser } from "../context/UserContext";

function Navbar() {
  const { total } = useContext(CartContext);
  const { token, logout } = useUser();

  return (
    <nav className={styleNavbar.Navbar}>
      <h2>Pizzeria Mamma Mia ♥</h2>

      <div>
        <Link to="/">Home</Link>

        {token ? (
          <>
            <Link to="/profile">Profile</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/loginPage">Login</Link>
            <Link to="/registerPage">Register</Link>
          </>
        )}
      </div>

      <Link to="/cart">Total ${total.toLocaleString("es-CL")}</Link>
    </nav>
  );
}

export default Navbar;
