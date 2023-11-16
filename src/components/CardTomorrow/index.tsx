import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import iconChuva from '../../assets/icons/cardinformation/chanceOfRain.png'
import iconHumidade from '../../assets/icons/cardinformation/humidity.png'
import iconVento from '../../assets/icons/cardinformation/wind.png'
import iconeTempo from '../../assets/icons/static/showerrain.png';

interface CardAmanha {
    humidade?: string
    chanceChuva?: string
    vento?: string 
}

export default function CardTomorrow({
    humidade,
    chanceChuva,
    vento
}: CardAmanha) {
    return(
        <View style={styles.container}>
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
        backgroundColor: 'rgba(8, 36, 79, 0.6)',
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