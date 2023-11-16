import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Button from '../../components/Button';
import { InputText } from '../../components/inputText';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthContext } from '../../context/authContext';
import { requestLocation } from '../../service/locationService';

export default function ScreenLogin({navigation}: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login }: any = useContext(AuthContext);

    async function handleLogin () {
        const response = await login(email, password);

        if(response === "Login feito com sucesso") {
            navigation.navigate('Main')
            setEmail('')
            setPassword('')
        } else {
            console.log(response)
        }
    }

    return (
    <LinearGradient
        // Background Linear Gradient
        colors={['#08244F', '#134CB5', '#0B42AB']}
        start={{ x: 0, y: 0 }} // Ponto de início (canto superior esquerdo)
        end={{ x: 1, y: 1 }}   // Ponto de fim (canto superior direito)
        style={styles.background}
        >
        <Text style={styles.titulo}>Seja Bem Vindo!!!</Text>
        <View style={styles.containerInput}>
            <InputText 
                placeholder='Digite seu email'
                value={email}
                onChangeText={setEmail}
            />
            <InputText 
                placeholder='Digite sua senha'
                value={password}
                onChangeText={setPassword}
            />
        </View>
        
        <Button valor="Entrar" onPress={() => handleLogin()}/>

        <View style={styles.containerCadastro}>
            <TouchableOpacity onPress={() => requestLocation()}>
                <Text>Esqueceu a senha?</Text>
            </TouchableOpacity>
            <Text style={{color: '#fff'}}>Ou</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text>Faça seu Cadastro</Text>
            </TouchableOpacity>
        </View>
    </LinearGradient>
    
    )
};