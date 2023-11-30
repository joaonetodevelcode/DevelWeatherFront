import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

describe("../App", () => {

    it("Should have 1 children", () => {

        const { toJSON } = render(
            <App />
        );
        
        expect(toJSON().children.length).toBe(1);
    });

});