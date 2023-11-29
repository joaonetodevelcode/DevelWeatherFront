import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CardCity } from '../../src/components/CardCity/idex';


describe("../../src/components/CityModal", () => {

    const searchCity = jest.fn(() => new Promise(resolve => resolve("qualquer coisa")));

    const mockInformation = {
        name: "cityName",
        local: "cityLocal",
        searchCity: () => searchCity()
    }

    it("Should have 1 children", () => {
        const { toJSON } = render(
            <CardCity
                {...mockInformation}
            />
        );
        const card = toJSON();
        
        expect(card.children.length).toBe(1);
    });

    it("Should press button 1 time", () => {
        const { getByText } = render(
            <CardCity
                {...mockInformation}
            />
        );
        ;
        fireEvent.press(getByText("cityName"))
        
        expect(searchCity).toHaveBeenCalledTimes(1);
    });

    it("Should set props values correctly ", () => {
        const { toJSON } = render(
            <CardCity
                {...mockInformation}
            />
        );
        const card = toJSON();

        expect(card.children[0].children[0].children[0]).toBe("cityName");
        expect(card.children[0].children[1].children[0]).toBe("cityLocal");
    });

});