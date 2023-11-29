import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ScreenLogin from '../../src/screens/ScreenLogin';

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
});