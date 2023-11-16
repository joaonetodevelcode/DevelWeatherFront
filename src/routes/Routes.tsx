import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ScreenLogin from '../screens/ScreenLogin';
import ScreenRegister from '../screens/ScreenRegister';
import ScreenMain from '../screens/ScreenMain';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Login" 
                    component={ScreenLogin} 
                    options={{ headerShown: false }}/>
                <Stack.Screen 
                    name="Register" 
                    component={ScreenRegister} 
                    options={{ headerShown: false }}/>
                <Stack.Screen 
                    name="Main" 
                    component={ScreenMain} 
                    options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

