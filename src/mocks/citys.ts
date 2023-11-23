interface City {
    name: string
    local: string
}

export const CITYS: City[] = [];

export function insertInCitys(nameCity: string, localCity: string, ) {
    const exist = CITYS.find(city => city.name === nameCity)
    if(!exist) {
        const newObject1 = { name: nameCity, local: localCity}
        CITYS.push(newObject1);
    }
}