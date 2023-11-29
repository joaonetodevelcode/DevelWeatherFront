import React, { useState } from "react";
import { FlatList, View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import { CardCity } from "../CardCity/idex";
import { CITYS, insertInCitys } from "../../mocks/citys";
import PlaceAutocomplete from "../PlaceAutocomplete";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
interface CityModalInterface {
    handleClose: () => void
    climateData: (dataCity: string ,cityName: string) => Promise<any>
    userCity: string
}


export default function CityModal({
    handleClose,
    climateData,
    userCity,
}: CityModalInterface) {
    
    async function searchDataCity(city: string, nameCity: string) {
        await climateData(city, nameCity)
        handleClose();
    } 

    async function insertNewCity(newCity:string, nameCity: string, localCity: string) {
        await climateData(newCity, nameCity);
        insertInCitys(nameCity, localCity)
        handleClose();
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
                insertNewCity(cityData[0], cityData[1], cityData[2]);
            }}/>
            
            <FlatList
                data={CITYS}
                renderItem={({item}) => 
                <CardCity 
                    name={item.name} 
                    local={item.local} 
                    searchCity={() => searchDataCity(`${item.name}, ${item.local}`, item.name)}
                    />}
                keyExtractor={item => item.name}
                style={styles.list}
            />
            
        </View>
        
        <TouchableOpacity style={{ width: '100%', height: '100%'}} onPress={handleClose}></TouchableOpacity>   
        
    </View>
)}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        paddingTop: Platform.OS === 'android'? 0 : getStatusBarHeight() + 20
    },
    content: {
        backgroundColor: '#fff',
        alignItems: 'center',
        height: 350,
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
    list: {
        width: '100%',
        marginTop: 45
    }
})