import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import ScreenRegister from '../../src/screens/ScreenRegister';
import { userRegister } from '../../src/service/registerService';

jest.mock("../../src/service/registerService");

describe("../../src/screens/ScreenRegister", () => {

    it("Should have 3 children and all inputTexts", () => {
        const { getByPlaceholderText, toJSON } = render(
            <ScreenRegister />
        );
        
        expect(toJSON().children.length).toBe(4);
        expect(getByPlaceholderText('Digite seu Nome Completo')).toBeTruthy();
        expect(getByPlaceholderText('Digite seu número. Ex: 00000000000')).toBeTruthy();
        expect(getByPlaceholderText('Digite seu email')).toBeTruthy();
        expect(getByPlaceholderText('Digite sua senha')).toBeTruthy();
    });
    
    it("Should navigate to ScreenLogin", async() => {
        const mockNavigate = jest.fn();

        const { getByText } = render(
            <ScreenRegister navigation={{navigate: mockNavigate}} />
        );
      
        fireEvent.press(getByText("Faça Login"));

        expect(mockNavigate).toHaveBeenCalledWith("Login");
    });

    it("Should register an user on press the button",async() => {
        const { getByText, getByPlaceholderText } = render(
            <ScreenRegister />
        );
        
        fireEvent.changeText(getByPlaceholderText("Digite seu Nome Completo"), "userName");
        fireEvent.changeText(getByPlaceholderText("Digite seu número. Ex: 00000000000"), "00000000000");
        fireEvent.changeText(getByPlaceholderText("Digite seu email"), "test@test.com");
        fireEvent.changeText(getByPlaceholderText("Digite sua senha"), "test123");
        fireEvent.press(getByText("Cadastrar"));
        
        await act(async() => {})

        expect(userRegister).toHaveBeenCalledTimes(1);
        expect(userRegister).toHaveBeenCalledWith("userName", "00000000000", "test@test.com", "test123");
        expect(getByPlaceholderText("Digite seu Nome Completo").props.value).toBe('');
        expect(getByPlaceholderText("Digite seu número. Ex: 00000000000").props.value).toBe('');
        expect(getByPlaceholderText("Digite seu email").props.value).toBe('');
        expect(getByPlaceholderText("Digite sua senha").props.value).toBe('');
    });

});