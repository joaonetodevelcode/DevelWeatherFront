import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

type CardProps = {
    name: string 
    state: string 
    country: string
    searchCity: (city: string) => Promise<any> 
};

export const CardCity = ({name, state, country, searchCity}: CardProps) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => searchCity(name)}>
        <Text style={styles.city}>{name}</Text>
        <Text style={styles.text}>{state}, {country}</Text>
        </TouchableOpacity>
    </View>
  );

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#A9A9A9'
    },
    city: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 14    
    }
})  