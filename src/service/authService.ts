import axios from "axios";
import urlDatabase from "../api/apiDatabase";
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function userLogin(email: string, password: string) {
    
    try {
          const response = await axios.post(`${urlDatabase}/login`, {
                email: email,
                password: password
            }
          );
          const user = `${response.data.user.email}, ${response.data.user.password}`
          await AsyncStorage.setItem("user", user)           
          
          return response.data
          
        } catch (error) {
            return "Nao foi possivel fazer login"
        }
}