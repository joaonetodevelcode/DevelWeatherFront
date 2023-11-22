import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import iconChuva from '../../assets/icons/cardinformation/chanceOfRain.png'
import iconHumidade from '../../assets/icons/cardinformation/humidity.png'
import iconVento from '../../assets/icons/cardinformation/wind.png'
import iconeTempo from '../../assets/icons/static/showerrain.png';

import { getTomorrowClimateData } from '../../api/apiClimate';
import { requestLocation } from '../../service/locationService';
import { climates } from '../../api/climates';

interface CardAmanha {
    humidade?: string
    chanceChuva?: string
    vento?: string 
    color: string
}

export default function CardTomorrow({
    humidade,
    chanceChuva,
    vento,
    color
}: CardAmanha) {
    const [climate, setClimate] = useState(null)
    const [temperature, setTemperature] = useState('')
    const [temperatureMax, setTemperatureMax] = useState('')
    const [temperatureMin, setTemperatureMin] = useState('')
    const [humidity, setHumidity] = useState('')
    const [wind, setWind] = useState('')
    const [clouds, setClouds] = useState('')
    let userLocation: number[] | undefined = []
    let latitude: number;
    let longitude: number;

    async function getClimateData(lat: number, lng: number) {
        if(lat) {
            const resultado = await getTomorrowClimateData(lat, lng)
            setClimate(resultado[0])
            setTemperature(resultado[1])
            setTemperatureMax(resultado[2])
            setTemperatureMin(resultado[3])
            setHumidity(resultado[4])
            setWind(resultado[5])
            setClouds(resultado[6])
            return
        }
        userLocation = await requestLocation();
        if(userLocation){
            const resultado = await getTomorrowClimateData(userLocation[0], userLocation[1])
            setClimate(resultado[0])
            setTemperature(resultado[1])
            setTemperatureMax(resultado[2])
            setTemperatureMin(resultado[3])
            setHumidity(resultado[4])
            setWind(resultado[5])
            setClouds(resultado[6])
            return
        }
    }
    
    useEffect(() => {
        getClimateData(latitude, longitude)
}, []);

    return(
        <View style={[styles.container, {backgroundColor: color}]}>
            <View style={styles.amanha}>
                <Text style={styles.titulo}>Amanhã</Text>
                <Text style={styles.texto2}>Mar,9</Text>
            </View>

            <View style={styles.containerInfos}>
                <Text style={styles.texto2}>Nublado</Text>
                <Image source={iconeTempo}/>
                <Text style={styles.texto2}>31°C  25°C</Text>
            </View>

            <View style={styles.containerInfos}>
                <View style={styles.informacoes}>
                    <Image source={iconChuva} />
                    <Text style={styles.texto}>{chanceChuva}%</Text>
                </View>

                <View style={styles.informacoes}>
                    <Image source={iconHumidade} />
                    <Text style={styles.texto}>{humidade}%</Text>
                </View>

                <View style={styles.informacoes}>
                    <Image source={iconVento} />
                    <Text style={styles.texto}>{vento} km/h</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '25%',
        width: '90%',
        borderRadius: 20,
        padding: 15,
        marginTop: 20,
        justifyContent: 'space-between'
        
    },
    amanha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    containerInfos: {
        height: '20%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',        
    },
    titulo: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    texto: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    texto2: {
        color: '#fff',
        fontSize: 18,
    },
    informacoes: {
        flexDirection: 'row',
    },

})

//ba4f4c84c18821a70163d0b64c213110