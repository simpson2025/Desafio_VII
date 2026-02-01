import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/CartContext";
import { UserProvider } from "./context/UserContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </UserProvider>
  </BrowserRouter>
);
