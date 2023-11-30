import React, {useContext, useEffect} from 'react';
import {Text, Button, View} from 'react-native'
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { AuthContext, AuthProvider } from '../../src/context/authContext';
import axios from "axios";

const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock('axios')

jest.mock('@react-native-async-storage/async-storage', () => ({
    setItem: jest.fn(),
  }));
  
  
  
  describe('../../src/context/authContext', () => {
    
    it('Should render a children', () => {        
        const { toJSON } = render(
            <AuthProvider>
                <Text />
            </AuthProvider>
        );

        expect(toJSON().type).toBe("Text");
    });
  
    it('should return a user information on successful login', async () => {
    
        jest.mock('../../src/service/authService');

        mockedAxios.post.mockResolvedValueOnce({
            data: {
                message: "Usuario encontrado",
                user: {
                    name: "userTest",
                    email: "test@example.com",
                    password: "password"
                }
            }
        })

        const TestComponent = () => {
            const { login, user }: any = useContext(AuthContext);

            useEffect(() => {
                login('test@example.com', 'password')
            }, []);

            return <Text>{user.name}</Text>;
        };
    
        const { getByText } = render(
            <AuthProvider>
                <TestComponent />
            </AuthProvider>
      );
      
      await waitFor(() => expect(getByText('userTest')).toBeTruthy());
    });

    it('should not return a user information on unsuccessful login', async () => {
    
        jest.mock('../../src/service/authService');

        const TestComponent = () => {
            const { login, user }: any = useContext(AuthContext);

            useEffect(() => {
                login('test@example.com', 'password')
            }, []);

            return <Text>{user.name}</Text>;
        };
    
        const { getByText } = render(
            <AuthProvider>
                <TestComponent />
            </AuthProvider>
      );
      
      await waitFor(() => expect(getByText('')).toBeTruthy());
    });
  
    it('should call logout and clear user data', async () => {
      
        const TestComponent = () => {
            const { login, logout, user }: any = useContext(AuthContext);
    
            useEffect(() => {
                login('test@example.com', 'password');
            }, []);
    
            return (
                <View>
                    <Text>{user.name}</Text>
                    <Button title="Logout" onPress={logout} />
                </View>
            );
        };
  
      const { getByText } = render(
        <AuthProvider>
          <TestComponent />
        </AuthProvider>
      );
  
      fireEvent.press(getByText('Logout'));
        
      expect(getByText('')).toBeTruthy();
    });
  });