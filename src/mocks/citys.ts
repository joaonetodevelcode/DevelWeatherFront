interface City {
    name: string
    state: string
    country: string
}

export const CITYS: City[] = [];

export function insertInCitys(newCity: string) {
    const exist = CITYS.find(city => city.name === newCity)
    if(!exist) {
        const newObject1 = { name: newCity, state: 'TAL', country: 'aquele la'}
        CITYS.push(newObject1);
    }
}