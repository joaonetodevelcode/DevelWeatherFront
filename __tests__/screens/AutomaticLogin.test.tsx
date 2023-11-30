import React from 'react';
import { render, act, fireEvent } from '@testing-library/react-native';
import AutomaticLogin from '../../src/screens/AutomaticLogin';
import { AuthProvider } from '../../src/context/authContext';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock('axios')

describe('../../src/screens/AutomaticLogin', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })

  it('Should navigate to ScreenLogin', async () => {
    const mockNavigation = { navigate: jest.fn() };

    render(
        <AuthProvider>
            <AutomaticLogin
                navigation={mockNavigation}
            />
        </AuthProvider>
      
    );
    await act(async () => {});
    
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Login');
  });

  it('Should navigate to ScreenMain', async () => {
    await AsyncStorage.setItem("user", "userEmail, password")
    const mockNavigation = { navigate: jest.fn() };

    jest.mock('../../src/service/authService');

    const matchMock = jest.spyOn(String.prototype, 'match');
    matchMock.mockReturnValue(["userEmail, password", "userEmail", "userPassword"]);


    mockedAxios.post.mockResolvedValueOnce({
        data: {
            message: "Usuario encontrado",
            user: {
                name: "userTest",
                email: "test@example.com",
                password: "password"
            }
        }
    });

    render(
        <AuthProvider>
            <AutomaticLogin
                navigation={mockNavigation}
            />
        </AuthProvider>
      
    );

    await act(async () => {});
    
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Main');
  });

  it('Should navigate to ScreenLogin when login response fails', async () => {
    await AsyncStorage.setItem("user", "userEmail, password")
    
    const mockNavigation = { navigate: jest.fn() };

    jest.mock('../../src/service/authService');

    const matchMock = jest.spyOn(String.prototype, 'match');
    matchMock.mockReturnValue(["userEmail, password", "userEmail", "userPassword"]);

    render(
        <AuthProvider>
            <AutomaticLogin
                navigation={mockNavigation}
            />
        </AuthProvider>
      
    );

    await act(async () => {});
    
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Login');
  });
});