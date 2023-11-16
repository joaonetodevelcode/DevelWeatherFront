import axios from "axios";
import urlDatabase from "../api/apiDatabase";

export async function userRegister(
    name: string, 
    cel: string, 
    email: string, 
    password: string) {
    
    try {
          const response = await axios.post(`${urlDatabase}/users/register`, {
                name: name,
                cel: cel,
                email: email,
                password: password
            }
          );

          return response.data
          
        } catch (error) {
            return "Nao foi possivel fazer o cadastro"
        }
}