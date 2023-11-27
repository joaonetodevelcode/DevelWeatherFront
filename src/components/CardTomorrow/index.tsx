import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import iconChuva from '../../assets/icons/cardinformation/chanceOfRain.png'
import iconHumidade from '../../assets/icons/cardinformation/humidity.png'
import iconVento from '../../assets/icons/cardinformation/wind.png'
import iconeTempo from '../../assets/icons/static/showerrain.png';

import { temperatureConversion } from '../../service/temperatureService';

interface CardTomorrowInterface {
    climate: string,
    temperatureMax: string,
    temperatureMin: string,
    humidity: string,
    wind: string,
    clouds: string,
    color: string,
    icon: any
}

export default function CardTomorrow({
    climate,
    temperatureMax,
    temperatureMin,
    humidity,
    wind,
    clouds,
    color,
    icon
}: CardTomorrowInterface) {
    return(
        <View style={[styles.container, {backgroundColor: color}]}>
            <View style={styles.amanha}>
                <Text style={styles.titulo}>Amanhã</Text>
                <Text style={styles.texto2}>Mar,9</Text>
            </View>

            <View style={styles.containerInfos}>
                <Text style={styles.texto2}>{climate}</Text>
                <Image source={icon}/>
                <Text style={styles.texto2}>{temperatureConversion(temperatureMax)}°C  {temperatureConversion(temperatureMin)}°C</Text>
            </View>

            <View style={styles.containerInfos}>
                <View style={styles.informacoes}>
                    <Image source={iconChuva} />
                    <Text style={styles.texto}>{clouds}%</Text>
                </View>

                <View style={styles.informacoes}>
                    <Image source={iconHumidade} />
                    <Text style={styles.texto}>{humidity}%</Text>
                </View>

                <View style={styles.informacoes}>
                    <Image source={iconVento} />
                    <Text style={styles.texto}>{wind} km/h</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 20,
        padding: 10,
        marginTop: 20,
        justifyContent: 'space-between'
        
    },
    amanha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    containerInfos: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',    
        marginTop: 30    
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