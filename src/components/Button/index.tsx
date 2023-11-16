import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
    valor: string;
    onPress?: () => void  
}

export default function Button({valor, onPress}: ButtonProps) : JSX.Element 
{
    return (
        <TouchableOpacity style={styles.botao}
            onPress={onPress}>
            <Text style={styles.texto}>{valor}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    botao: {
        //height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#08244F',
        height: '5%',
        width: '90%',
    },
    texto: {
        color: '#fff',
        alignItems: 'center',
        fontSize: 18
    },
})