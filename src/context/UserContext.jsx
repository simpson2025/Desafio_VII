import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  // LOGIN (backend)
  async function login(email, password) {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setToken(data.token);
      setEmail(data.email);
      return true;
    } else {
      alert("Login incorrect");
      return false;
    }
  }

  // REGISTER (backend)
  async function register(email, password) {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setToken(data.token);
      setEmail(data.email);
      return true;
    } else {
      alert("Erreur register");
      return false;
    }
  }

  // LOGOUT
  function logout() {
    setToken(null);
    setEmail(null);
  }

  return (
    <UserContext.Provider
      value={{
        token,
        email,
        login,
        register,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
