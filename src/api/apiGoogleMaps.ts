import axios from "axios";

const url = "https://maps.googleapis.com/maps/api/geocode/json?"
const key = "AIzaSyDHNR1fqjETF0dodsgE1dlMV1F-WFjbTx4"
const dados = "plus_code"

export async function getCityName(lat: number | undefined, lon: number | undefined) {
    
    const response = await axios.get(`${url}latlng=${lat},${lon}&key=${key}`)
    
    return response.data.results[0].address_components[3].long_name
}

export async function getDataCityByName(city: string) {
    const data: number[] = []
    const response = await axios.get(`${url}address=${city}&key=${key}`)
    data[0] = response.data.results[0].geometry.location.lat
    data[1] = response.data.results[0].geometry.location.lng
    return data
    
}