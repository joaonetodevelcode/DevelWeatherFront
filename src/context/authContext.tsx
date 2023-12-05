import React, { ReactNode, createContext, useState, useMemo } from "react";
import { userLogin } from "../service/authService";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthProviderProps = {
  children: ReactNode | undefined;
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

    async function logout() {
      setUser({})
      await AsyncStorage.setItem('user', '')
    }

    const value = useMemo(
      () => ({login, logout, user}),
      [login, logout, user]
    );

    return (
        <AuthContext.Provider value={ value }>
          {children}
        </AuthContext.Provider>
    )
}