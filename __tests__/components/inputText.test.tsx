import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { InputText } from '../../src/components/inputText';

describe("../../src/components/inputText", () => {

    test('Should call the onChangeText function and set de value correctly', () => {
        
        const onChangeTextMock = jest.fn();

        const { getByPlaceholderText } = render(
          <InputText
            placeholder="Type your email"
            onChangeText={onChangeTextMock}
            value='test@test.com'
          />
        );
    
        
        const input = getByPlaceholderText('Type your email');
        
        fireEvent.changeText(input, 'test@test.com');
       
        
        expect(onChangeTextMock).toHaveBeenCalledWith('test@test.com');
        expect(input.props.value).toBe('test@test.com')
      });

})