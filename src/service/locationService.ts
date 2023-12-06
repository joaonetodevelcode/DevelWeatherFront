import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { Alert } from 'react-native';

const location: number[] = []

export async function requestLocation() {
    const { granted } = await requestForegroundPermissionsAsync();

    const waitingRequest = new Promise((_, reject) => {
        const timeoutId = setTimeout(() => {
          clearTimeout(timeoutId);
          reject(new Error('Houve um erro ao acessar sua localização'));
        }, 15000);
      });

    if(granted === true) {
        try {
            const curretPosition: any = await Promise.race([
                getCurrentPositionAsync(),
                waitingRequest
            ]) 
            location[0] = curretPosition.coords.latitude;
            location[1] = curretPosition.coords.longitude;
        }catch(erro){
            Alert.alert("", 'Houve um erro ao acessar sua localização', [
                {text: 'OK'}]);
            location[0] = -19.461045;
            location[1] = -42.568050;
        } 
        return location
    }else {
        Alert.alert("", 'O aplicativo pode não funcionar corretamente sem o acesso a sua localização', [
            {text: 'OK'}]);
        location[0] = -19.461045;
        location[1] = -42.568050;
        return location
    }
}
