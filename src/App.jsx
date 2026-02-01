import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import RegisterPage from "./auth/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />    /*Listo */
        <Route path="/registerPage" element={<RegisterPage />} /> /*listo */
        <Route path="/loginPage" element={<LoginPage />} />  /*Listo */
        <Route path="/cart" element={<Cart />} /> /*listo*/
        <Route path="/profile" element={<Profile/>} />  /*Listo */
        <Route path="/pizza" element={<Pizza />} /> 
   

        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
