import axios from "axios";

const url = "https://api.openweathermap.org/data/2.5/weather?q="
const key = "ba4f4c84c18821a70163d0b64c213110"


export async function pegarDadosClima(cidade: string) {
    
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${key}`)

    return response.data
}