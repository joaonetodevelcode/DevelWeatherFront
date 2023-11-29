import React from 'react';
import { render } from '@testing-library/react-native';
import CardInformation from '../../src/components/CardInformation';

describe("../../src/components/CardInformation", () => {

    it("Should be set the variables value", () => {
        const {getByText} = render(
            <CardInformation 
                humidade='20'
                chanceChuva='40'
                vento='10'
                color='#fff' />
        );
        ;
        expect(getByText("20%")).toBeTruthy();
        expect(getByText("40%")).toBeTruthy();
        expect(getByText("10 km/h")).toBeTruthy();;
        

    });

    it("Should have 3 children", () => {
        const {toJSON} = render(
            <CardInformation color="#fff" />
        );

        const card = toJSON();
        expect(card.children.length).toBe(3);

    });

});