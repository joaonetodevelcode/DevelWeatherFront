import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import ScreenLogin from '../screens/ScreenLogin';
import ScreenRegister from '../screens/ScreenRegister';
import ScreenMain from '../screens/ScreenMain';
import AutomaticLogin from '../screens/AutomaticLogin';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="AutomaticLogin" 
                    component={AutomaticLogin} 
                    options={{ headerShown: false,
                        gestureEnabled: false }}/>
                <Stack.Screen 
                    name="Login" 
                    component={ScreenLogin} 
                    options={{ headerShown: false,
                        gestureEnabled: false }}/>
                <Stack.Screen 
                    name="Register" 
                    component={ScreenRegister} 
                    options={{ headerShown: false }}/>
                <Stack.Screen 
                    name="Main" 
                    component={ScreenMain} 
                    options={{ headerShown: false,
                        gestureEnabled: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
        </GestureHandlerRootView>
    )
}

