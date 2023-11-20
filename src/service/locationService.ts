import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

export async function requestLocation() {
    const { granted } = await requestForegroundPermissionsAsync();

    if(granted) {
        const location: number[] = []
        const curretPosition = await getCurrentPositionAsync();
        location[0] = curretPosition.coords.latitude;
        location[1] = curretPosition.coords.longitude;
        return location
    }

}