import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { InputText } from "../inputText";
import Button from "../Button";

interface CityModalInterface {
    handleClose: () => void
}

export default function CityModal({
    handleClose
}: CityModalInterface) {
    return <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.search}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o nome da Cidade"
                />
                <TouchableOpacity
                  style={styles.button}
                >
                    <Text>Buscar</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View>
                    <Text>NOMDE DA CIDADE</Text>
                    <Text>PAÍS</Text>
                    <Text>ESTADO</Text>
                </View>
            </ScrollView>
            
        </View>

        <TouchableOpacity style={{ height: '60%', width: '100%' }} onPress={handleClose}></TouchableOpacity>   
        
    </View>
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1
    },
    content: {
        backgroundColor: '#fff',
        alignItems: 'center',
        height: '40%',
        width: '95%',
        borderRadius: 20
    },
    search: {
        justifyContent: 'center',
        height: 40,
        width: '95%',
        flexDirection: 'row',
        marginTop: 5
    },
    input: {
        borderColor: '#000',
        borderWidth: 1.5,
        color: "#000000",
        fontSize: 18,
        width: '70%',
        height: 40,
        borderRadius: 20,
        paddingLeft: 20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#696969',
        width: '30%',
        height: 40
    }
})