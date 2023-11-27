import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Button from '../../components/Button';
import { InputText } from '../../components/inputText';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { userRegister } from '../../service/registerService';

export default function ScreenRegister({navigation}: any) {
    const [name, setName] = useState('');
    const [cel, setCel] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleRegister() {
        const response = await userRegister(name, cel, email, password)
        console.log(response.message)
        setName('')
        setCel('')
        setEmail('')
        setPassword('')
    }

    return (
    <LinearGradient
        // Background Linear Gradient
        colors={['#08244F', '#134CB5', '#0B42AB']}
        start={{ x: 0, y: 0 }} // Ponto de início (canto superior esquerdo)
        end={{ x: 1, y: 1 }}   // Ponto de fim (canto superior direito)
        style={styles.container}
        >
        <Text style={styles.titulo}>Faça seu cadastro</Text>
        <View style={styles.containerInput}>
            <InputText 
                placeholder='Digite seu Nome Completo'
                value={name}
                onChangeText={setName}
            />
            <InputText 
                placeholder='Digite seu número. Ex: 00000000000'
                value={cel}
                onChangeText={setCel}
            />
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
        
        <Button valor="Cadastrar" onPress={() => handleRegister()}/>

        <View style={styles.containerCadastro}>
            <Text>Ja possui conta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.texto}>Faça Login</Text>
            </TouchableOpacity>
        </View>
    </LinearGradient>
    )
};