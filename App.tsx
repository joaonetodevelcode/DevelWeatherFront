import 'expo-dev-client';
import Routes from './src/routes/Routes';
import { AuthProvider } from './src/context/authContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <AuthProvider>
        <Routes />
    </AuthProvider>
    </GestureHandlerRootView>
  );
}


