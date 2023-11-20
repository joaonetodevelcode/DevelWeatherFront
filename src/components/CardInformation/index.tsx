import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import iconChuva from '../../assets/icons/cardinformation/chanceOfRain.png'
import iconHumidade from '../../assets/icons/cardinformation/humidity.png'
import iconVento from '../../assets/icons/cardinformation/wind.png'

interface CardInfos {
    humidade?: string
    chanceChuva?: string
    vento?: string
    color: string
}

export default function CardInformation({
    humidade,
    chanceChuva,
    vento,
    color
}: CardInfos) {
    return(
            <View style={[styles.container, {backgroundColor: color}]}>
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
    )
}

const styles = StyleSheet.create({
    container: {
        height: '5%',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 20,
        padding: 15
        
    },
    texto: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    informacoes: {
        flexDirection: 'row',
    },

})

