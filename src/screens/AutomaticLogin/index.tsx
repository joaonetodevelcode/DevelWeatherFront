import React, {useContext, useEffect} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from "lottie-react-native";
import loading from '../../assets/icons/loading.json'
import { AuthContext } from '../../context/authContext';

export default function AutomaticLogin({navigation}: any) {

    const { login }: any = useContext(AuthContext);

    async function handleAutomaticLogin() {
        const user = await AsyncStorage.getItem('user')
        const regex = /([^,]+),\s*([^,]+)/;
        if(user){
            const userData = user.match(regex);
            if(userData){
                const response = await login(userData[1], userData[2]);
                console.log(response)
                if(response === "Login feito com sucesso") {
                    navigation.navigate('Main')
                    return
                } 
                else {
                    navigation.navigate('Login')
                    return
                }
            }
        } else {
            navigation.navigate('Login')
            return
        }
    
    }

    useEffect(() => {
        handleAutomaticLogin()
    }, [])

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
        marginBottom: 70
    }
})
