import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import ScreenLogin from '../../src/screens/ScreenLogin';
import { AuthProvider } from '../../src/context/authContext';
import axios from "axios";

const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock('axios')

describe('../../src/screens/ScreenLogin', () => {

    it('Should navigate to ScreenRegister', () => {
      const mockNavigate = jest.fn();

      const { getByText } = render(
        <ScreenLogin navigation={{ navigate: mockNavigate }} />
      );

      const cadastroButton = getByText('Faça seu Cadastro');

      fireEvent.press(cadastroButton);

      expect(mockNavigate).toHaveBeenCalledWith('Register');
    });

    it('Should navigate to ScreenMain', async() => {
      const mockNavigate = jest.fn();

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

      const { getByText } = render(
        <AuthProvider>
          <ScreenLogin navigation={{ navigate: mockNavigate }} />
        </AuthProvider>
      );

      const cadastroButton = getByText('Entrar');

      fireEvent.press(cadastroButton);

      await act(async() => {})

      expect(mockNavigate).toHaveBeenCalledWith('Main');
    });

    it('Should not call navigate', async() => {
      const mockNavigate = jest.fn();

      jest.mock('../../src/service/authService');

    //   mockedAxios.post.mockResolvedValueOnce({
    //     data: {
    //         message: "Usuario Nao",
    //     }
    // })

      const { getByText } = render(
        <AuthProvider>
          <ScreenLogin navigation={{ navigate: mockNavigate }} />
        </AuthProvider>
      );

      const cadastroButton = getByText('Entrar');

      fireEvent.press(cadastroButton);

      await act(async() => {})

      expect(mockNavigate).toHaveBeenCalledTimes(0);
    });
});