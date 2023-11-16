import React, { ReactNode, createContext, useState } from "react";
import { userLogin } from "../service/authService";

type AuthProviderProps = {
  children?: ReactNode | undefined;
}

type AuthContextType = {
  login: (email: string, password: string) => void;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider ({children}: AuthProviderProps) {
    const [user, setUser] = useState({});

    async function login(email: string, password: string) {
      const response = await userLogin(email, password)
      
      if(response.message === "Usuario encontrado") {
        setUser(response.user)
        return "Login feito com sucesso"
      } else {
        setUser({})
        return "Erro ao fazer Login"
      }
    }

    const value = {login}

    return (
        <AuthContext.Provider value={ value }>
          {children}
        </AuthContext.Provider>
    )
}