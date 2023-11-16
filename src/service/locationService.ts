import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

export async function requestLocation() {
    const { granted } = await requestForegroundPermissionsAsync();

    if(granted) {
       const curretPosition = await getCurrentPositionAsync();

       console.log(curretPosition);
    }

}