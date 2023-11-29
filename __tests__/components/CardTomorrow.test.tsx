import React from 'react';
import { render } from '@testing-library/react-native';
import CardTomorrow from '../../src/components/CardTomorrow';
import icon from '../../src/assets/icons/location.png';

describe("../../src/components/CardTomorrow", () => {

    const mockIformations = {
                climate: 'Climate',
                temperatureMax: '300',
                temperatureMin: '300',
                humidity: 'humidity',
                wind: 'wind',
                clouds: 'clouds',
                color: 'color',
                icon: {icon}
    }

    it("Should have 3 children", () => {
        const { toJSON } = render(
            <CardTomorrow 
                {...mockIformations}
            />
        );
        
        const card = toJSON();

        expect(card.children.length).toBe(3)
    });

    it("Should set props values correctly", () => {
        const { getByText, toJSON } = render(
            <CardTomorrow 
                {...mockIformations}
            />
        );
        const card = toJSON()
        console.log(card.children[1].children[1].props.source)
        expect(getByText("Climate")).toBeTruthy()
        expect(getByText("27°C 27°C")).toBeTruthy()
        expect(getByText("humidity%")).toBeTruthy()
        expect(getByText("wind km/h")).toBeTruthy()
        expect(getByText("clouds%")).toBeTruthy()
        expect(card.props.style[1].backgroundColor).toBe("color")
        expect(card.children[1].children[1].props.source.icon).toBe(icon)
    });
    
});