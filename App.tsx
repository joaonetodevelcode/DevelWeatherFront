
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Routes from './src/routes/Routes';
import { AuthProvider } from './src/context/authContext';

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaView style={styles.container}>
        <Routes />
      </SafeAreaView> 
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



