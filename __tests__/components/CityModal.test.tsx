import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import CityModal from '../../src/components/CityModal';
import { insertInCitys } from '../../src/mocks/citys';

jest.mock("../../src/mocks/citys")

const data = {
    description: 'description',
    structured_formatting: {
      main_text: 'mainText',
      secondary_text: 'secondaryText',
    }
}

describe("../../src/components/CityModal", () => {

    const handleClose = jest.fn(() => {});
    const climateData = jest.fn(() => new Promise(() => {}));

    const mockInformations = {
        handleClose: () => handleClose(),
        climateData: () => climateData(),
    }

    beforeEach(() => {
        jest.clearAllMocks();
    })

    it("Should have 1 child if not userCity", async() => {
        const { toJSON } = render(
            <CityModal 
                {...mockInformations}
                userCity=''
            />
        );
        await act(async () => {});
        const card = toJSON();
        
        expect(card.children.length).toBe(1)
    });

    it("Should have 2 child if userCity", async() => {
        const { toJSON } = render(
            <CityModal 
                {...mockInformations}
                userCity='cityName'
            />
        );

        await act(async () => {});

        const card = toJSON();
        expect(card.children.length).toBe(2);
    });

    it('should call climateData, handleClose and insertInCitys', async () => {
        climateData.mockResolvedValueOnce(true)

        const { getByPlaceholderText } = render(
          <CityModal
            handleClose={handleClose}
            climateData={climateData}
            userCity={'cityName'}
          />
        );
        
        fireEvent.press(getByPlaceholderText("Insira uma nova Cidade"), data);

        await act(async () => {});
    
        expect(climateData).toHaveBeenCalledTimes(1);
        expect(handleClose).toHaveBeenCalledTimes(1);
        expect(insertInCitys).toHaveBeenCalledTimes(1);
      });

});