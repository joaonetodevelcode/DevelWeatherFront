import React from 'react';
import { render, act } from '@testing-library/react-native';
import AutomaticLogin from '../../src/screens/AutomaticLogin';
import { AuthProvider } from '../../src/context/authContext';

describe('AutoLoginScreen', () => {

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
});