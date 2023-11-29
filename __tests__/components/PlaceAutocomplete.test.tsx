import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import PlaceAutocomplete from '../../src/components/PlaceAutocomplete';

describe("../../src/components/PlaceAutocomplete", () => {

    const onPress = jest.fn();

    it("Should have 1 children", () => {
        const { toJSON } = render(
            <PlaceAutocomplete  onPress={onPress}/>
        );
        const card = toJSON();

        expect(card.children.length).toBe(1);
    });

    it("Should press buton 1 time", () => {
        const { getByPlaceholderText } = render(
            <PlaceAutocomplete  onPress={onPress}/>
        );
        
        fireEvent.press(getByPlaceholderText("Insira uma nova Cidade"));

        expect(onPress).toHaveBeenCalledTimes(1);
    });

});