import React, { useEffect, useRef, useState } from "react";
import { FlatList, View, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { getCityName, getDataCityByName } from "../../api/apiGoogleMaps";
import { CardCity } from "../CardCity/idex";
import { requestLocation } from "../../service/locationService";
interface CityModalInterface {
    handleClose: () => void
    climateData: (lat: number, lng: number) => Promise<any>
    userCity: string
}
interface City {
    name: string
    state: string
    country: string
}

export const CITYS: City[] = [];

export default function CityModal({
    handleClose,
    climateData,
    userCity
}: CityModalInterface) {
    const [newCity, setNewCity] = useState('')
    
    function insertInCitys(newCity: string) {
        const exist = CITYS.find(city => city.name === newCity)
        if(!exist) {
            const newObject1 = { name: newCity, state: 'TAL', country: 'aquele la'}
            CITYS.push(newObject1);
        }
    }
   

    async function searchDataCity(city: string) {
        const dataCity = await getDataCityByName(city)
        if(dataCity) {
            await climateData(dataCity[0], dataCity[1])
            handleClose();
        }
    } 

    async function insertNewCity(newCity:string) {
        const dataCity = await getDataCityByName(newCity)
        if(dataCity) {
            await climateData(dataCity[0], dataCity[1]);
            const nameCity = await getCityName(dataCity[0], dataCity[1]);
            insertInCitys(nameCity)
            handleClose();
        }
    }

    if (!userCity){ 
        
        return ( 
        <View style={styles.container} >
            <Text>CARREGANDO...</Text>
        </View>
    )}

    return( 
    <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.search}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma Cidade"
                    value={newCity}
                    onChangeText={setNewCity}
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => insertNewCity(newCity)}
                >
                    <Text>Adicionar</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={CITYS}
                renderItem={({item}) => 
                <CardCity 
                    name={item.name} 
                    state={item.state} 
                    country={item.country} 
                    searchCity={() => searchDataCity(item.name)}
                    />}
                keyExtractor={item => item.name}
                style={styles.list}
            />
            
        </View>

        <TouchableOpacity style={{ height: '60%', width: '100%' }} onPress={handleClose}></TouchableOpacity>   
        
    </View>
)}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1
    },
    content: {
        backgroundColor: '#fff',
        alignItems: 'center',
        height: '40%',
        width: '95%',
        borderRadius: 20
    },
    search: {
        justifyContent: 'center',
        height: 40,
        width: '95%',
        flexDirection: 'row',
        marginTop: 5
    },
    input: {
        borderColor: '#000',
        borderWidth: 1.5,
        color: "#000000",
        fontSize: 18,
        width: '70%',
        height: 40,
        borderRadius: 20,
        paddingLeft: 20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#696969',
        width: '30%',
        height: 40
    },
    list: {
        width: '100%'
    }
})