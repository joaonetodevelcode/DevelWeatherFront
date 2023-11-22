import axios from "axios";

const url = "https://api.openweathermap.org/data/2.5/"
const key = "9f17eff0b09150069908363188a029c6"


export async function getCurrentClimateData(lat: number | undefined, lon: number | undefined) {
    const climateData: Array<any> = []
    try{
        const response = await axios.get(`${url}weather?lat=${lat}&lon=${lon}&appid=${key}`)

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

