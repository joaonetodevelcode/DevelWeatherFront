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
}

export default function CardInformation({
    humidade,
    chanceChuva,
    vento
}: CardInfos) {
    return(
            <View style={styles.container}>
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
        backgroundColor: 'rgba(8, 36, 79, 0.6)',
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

//ba4f4c84c18821a70163d0b64c213110