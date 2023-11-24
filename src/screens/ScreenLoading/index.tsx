import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

import LottieView from "lottie-react-native";
import loading from '../../assets/icons/loading.json'

export default function ScreenLoading() {

    return(
        <LinearGradient
        // Background Linear Gradient
        colors={['#29B2DD','#33AADD','#2DC8EA']}
        start={{ x: 0, y: 0 }} // Ponto de início (canto superior esquerdo)
        end={{ x: 1, y: 1 }}   // Ponto de fim (canto superior direito)
        style={styles.container}
        >
            <LottieView source={loading}
                autoPlay={true}
                loop={true}
                style={styles.content}
            />
            
        </LinearGradient> 
    )
}

export const styles = StyleSheet.create({
    container: {
        flex:1 ,
        alignItems: 'center',
    },
    content: {
        marginBottom: '15%'
    }
})
