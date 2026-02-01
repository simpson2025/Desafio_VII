import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import style from "./RegisterPage.module.css";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [pasword, setPasword] = useState("");
  const [rePasword, setRePasword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const { register } = useUser();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setMensaje("");

    if (!email || !pasword || !rePasword) {
      setMensaje("Tous les champs sont obligatoires");
      return;
    }

    if (pasword.length < 6) {
      setMensaje("Le mot de passe doit avoir au moins 6 caractères");
      return;
    }

    if (pasword !== rePasword) {
      setMensaje("Les mots de passe ne correspondent pas");
      return;
    }

    // 👉 appel réel au backend
    const success = await register(email, pasword);

    if (success) {
      navigate("/profile");
    } else {
      setMensaje("Erreur lors de l'inscription");
    }
  }

  return (
    <div className={style.formulario}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="pasword">Password</label>
        <input
          id="pasword"
          type="password"
          placeholder="Entrez votre mot de passe"
          value={pasword}
          onChange={(e) => setPasword(e.target.value)}
        />

        <label htmlFor="confirmarPasword">Confirm Password</label>
        <input
          id="confirmarPasword"
          type="password"
          placeholder="Répétez le mot de passe"
          value={rePasword}
          onChange={(e) => setRePasword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default RegisterPage;
