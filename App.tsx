import Routes from './src/routes/Routes';
import { AuthProvider } from './src/context/authContext';

export default function App() {
  return (
    <AuthProvider>
        <Routes />
    </AuthProvider>
  );
}


