import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [token, setToken] = useState(false);

  const logout = () => setToken(true);
  console.log(logout)

  return (
    <UserContext.Provider value={{ token, logout, setToken }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
