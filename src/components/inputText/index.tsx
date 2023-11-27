import React from 'react';
import { StyleSheet, TextInput } from 'react-native'

interface InputProps {
    label?: string;
    placeholder: string;
    secureTextEntry?: boolean;
    value?: string;
    onChangeText?: (text: string) => void;
  }
  
  export function InputText ({ 
    label, 
    placeholder, 
    secureTextEntry = false,
    value,
    onChangeText
  } : InputProps) {
    return (
      <TextInput 
        style={styles.input}
        placeholder = {placeholder}
        secureTextEntry = {secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    );
  };

  const styles = StyleSheet.create({
    input: {
      borderColor: '#08244F',
      borderWidth: 1.5,
      color: "#000000",
      fontSize: 18,
      width: '100%',
      height: 50,
      borderRadius: 20,
      paddingLeft: 20,
      marginVertical: 10
  },
  })