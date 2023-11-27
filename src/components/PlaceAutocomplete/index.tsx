import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


interface PlaceAutocompleteInterface {
  onPress: (data: any) => any
}

function PlaceAutocomplete({onPress}: PlaceAutocompleteInterface) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <GooglePlacesAutocomplete
          placeholder='Insira uma nova Cidade'
          onPress={(data) => onPress(data)}
          query={{
            key: 'AIzaSyDHNR1fqjETF0dodsgE1dlMV1F-WFjbTx4',
            language: 'pt-BR',
            type: '(cities)'
          }}
          styles={{
            textInput: {
              borderRadius: 20,
              height: 40,
              backgroundColor: '#f1f1f1'
            },
            poweredContainer: {
              borderColor: '#000',
              borderWidth: 1, 
            },
            listView: {
              flex: 1, 
            }
          }}
        />
      </View>
    </View>
  );
};

export default PlaceAutocomplete;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    width: '100%',
    zIndex: 1,
    marginTop: 5
  },
  content: {
    width: '100%',
    height: '100%',
    padding: 5
  },
});
