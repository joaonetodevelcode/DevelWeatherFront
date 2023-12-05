import axios from "axios";

const url = "https://api.openweathermap.org/data/2.5/"
const url2 = "https://pro.openweathermap.org/data/2.5/"
const key = process.env.API_WEATHER_KEY


export async function getCurrentClimateData(cityName: string | undefined) {
    const climateData: Array<string> = []
    try{
        const response = await axios.get(`${url}weather?q=${cityName}&appid=${key}`)

        const climate = response.data

        if(climate) {
            climateData[0] = climate.weather[0].description
            climateData[1] = climate.main.temp
            climateData[2] = climate.main.temp_max
            climateData[3] = climate.main.temp_min
            climateData[4] = climate.main.humidity
            climateData[5] = climate.wind.speed
            climateData[6] = climate.clouds.all
        }
        return climateData

    } catch(erro) {
        climateData[0] = 'Requisição falhou'
        return climateData
    }
}

export async function getTomorrowClimateData(cityName: string | undefined) {
    const climateData: Array<string> = []
    
    try{
        const response = await axios.get(`${url2}forecast/hourly?q=${cityName}&appid=${key}`)

        const climate = response.data.list[20]

        if(climate) {
            climateData[0] = climate.weather[0].description
            climateData[1] = climate.main.temp
            climateData[2] = climate.main.temp_max
            climateData[3] = climate.main.temp_min
            climateData[4] = climate.main.humidity
            climateData[5] = climate.wind.speed
            climateData[6] = climate.clouds.all
        }

        return climateData

    } catch(erro) {
        climateData[0] = 'Requisição falhou'
        return climateData
    }
}

