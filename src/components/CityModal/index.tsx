import React, { useEffect, useRef, useState } from "react";
import { FlatList, View, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { getCityName, getDataCityByName } from "../../api/apiGoogleMaps";
import { CardCity } from "../CardCity/idex";
import { CITYS, insertInCitys } from "../../mocks/citys";
import PlaceAutocomplete from "../PlaceAutocomplete";
interface CityModalInterface {
    handleClose: () => void
    climateData: (lat: number, lng: number) => Promise<any>
    userCity: string
}


export default function CityModal({
    handleClose,
    climateData,
    userCity,
}: CityModalInterface) {
    const [newCity, setNewCity] = useState('')   

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
            
            <PlaceAutocomplete onPress={(data) => {
                const cityData = [data.description,
                    data.structured_formatting.main_text,
                    data.structured_formatting.secondary_text
                ]
                insertNewCity(cityData[0]);
                console.log(cityData)
            }}/>
            
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

        <TouchableOpacity style={{ height: '60%', width: '100%'}} onPress={handleClose}></TouchableOpacity>   
        
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
        backgroundColor: '#D1D1D1',
        width: '30%',
        height: 40,
        marginLeft: '70%',
        marginTop: '1.5%'
    },
    list: {
        width: '100%',
        marginTop: 45
    }
})