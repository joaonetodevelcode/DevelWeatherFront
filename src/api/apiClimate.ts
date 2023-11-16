import axios from "axios";

const url = "https://api.openweathermap.org/data/2.5/weather?q="
const key = "ba4f4c84c18821a70163d0b64c213110"


export async function pegarDadosClima(lat: string, lon: string) {
    
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)

    return response.data
}