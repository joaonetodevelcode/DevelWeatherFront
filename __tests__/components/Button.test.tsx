import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Button from "../../src/components/Button";

describe("../../src/components/Button", () => {

    const buttonAction = jest.fn();

    it("Shold be press one time", () => {
        const { getByText } = render(
            <Button 
                valor="testButton"
                onPress={buttonAction}
            />
        );

        fireEvent.press(getByText("testButton"))

        expect(buttonAction).toHaveBeenCalledTimes(1);
        
    });

});