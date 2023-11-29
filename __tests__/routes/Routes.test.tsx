import { render } from '@testing-library/react-native';
import React from 'react';
import Routes from '../../src/routes/Routes';

describe("../../src/routes/Routes", () => {

    it("Should have 1 children", async() => {
        const { toJSON } = render(<Routes />);
        
        const routes = toJSON();
        
        expect(routes.children.length).toBe(1);
    });
});