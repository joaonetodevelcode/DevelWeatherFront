import React from 'react';
import { render } from '@testing-library/react-native';
import ScreenLoading from '../../src/screens/ScreenLoading';

describe("../../src/screens/ScreenLoading", () => {

    it("Should have 1 children", () => {
        const { toJSON } = render(
            <ScreenLoading />
        );

        const screen = toJSON();

        expect(screen.children.length).toBe(1);
    });

});