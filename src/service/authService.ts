import axios from "axios";
import urlDatabase from "../api/apiDatabase";

export async function userLogin(email: string, password: string) {
    
    try {
          const response = await axios.post(`${urlDatabase}/login`, {
                email: email,
                password: password
            }
          );

          return response.data
          
        } catch (error) {
            return "Nao foi possivel fazer login"
        }
}