import React from 'react';
import { BackHandler } from 'react-native';
import { useBackHandler } from '@react-native-community/hooks';
import { renderHook } from '@testing-library/react-native';
import { act, fireEvent, render } from '@testing-library/react-native';
import ScreenMain from '../../src/screens/ScreenMain';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import axios from "axios";
import { AuthProvider } from '../../src/context/authContext';

const mockRequestForegroundPermissionsAsync = requestForegroundPermissionsAsync as jest.MockedFunction<typeof requestForegroundPermissionsAsync>;
const mockGetCurrentPositionAsync = getCurrentPositionAsync as jest.MockedFunction<typeof getCurrentPositionAsync>;
jest.mock('expo-location', () => ({
    requestForegroundPermissionsAsync: jest.fn(),
    getCurrentPositionAsync: jest.fn(),
  })
);

const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock('axios')

const mockCity = {
    data: {
        results: [{
            address_components: ["","","",
            {
                long_name: "City Name"
            }]
        }]
    }
}

const mockClimates = {
    data: {
        weather: [
            {description: 'scattered clouds'}
        ],
        main: {
            temp: 303.6,
            temp_max: 303.26,
            temp_min: 303.26,
            humidity: 66
        },
        wind: {
            speed: 6.17
        },
        clouds:{
            all: 40
        }
    }
}

const mockClimatesTomorrow = {
    data:{
        list: ["","","","","","","","","","","","","","","","","","","","",
        {
            weather: [
                {description: 'scattered clouds'}
            ],
            main: {
                temp: 303.6,
                temp_max: 303.26,
                temp_min: 303.26,
                humidity: 66
            },
            wind: {
                speed: 6.17
            },
            clouds:{
                all: 40
            }
        }]
    }
}

describe("../../src/screens/ScreenLogin", () => {

    beforeEach(() => {
        mockRequestForegroundPermissionsAsync.mockClear();
        mockGetCurrentPositionAsync.mockClear();
        mockedAxios.get.mockClear();
    });

    it("Should have 1 children when not icon", async() => {
        mockRequestForegroundPermissionsAsync.mockResolvedValueOnce({"canAskAgain": true, "expires": "never", "granted": true, "status": "granted"} as any);
        mockGetCurrentPositionAsync.mockResolvedValueOnce({
            coords: {
            latitude: 40.7128,
            longitude: -74.0060,
            }
        } as any);

        mockedAxios.get.mockResolvedValueOnce(mockCity);
        mockedAxios.get.mockClear();
        mockedAxios.get.mockResolvedValueOnce({});

        const { toJSON } = render(
            <ScreenMain />
        );
   
        await act(async() => {})

        expect(toJSON().children.length).toBe(1);
    }); 

    it("Should have 2 children when icon", async() => {
        mockRequestForegroundPermissionsAsync.mockResolvedValueOnce({"canAskAgain": true, "expires": "never", "granted": true, "status": "granted"} as any);
        mockGetCurrentPositionAsync.mockResolvedValueOnce({
            coords: {
            latitude: 40.7128,
            longitude: -74.0060,
            }
        } as any);

        mockedAxios.get.mockResolvedValueOnce(mockCity);
        mockedAxios.get.mockClear();
        mockedAxios.get.mockResolvedValueOnce(mockClimates);
        mockedAxios.get.mockClear();
        mockedAxios.get.mockResolvedValueOnce(mockClimatesTomorrow);

        const { toJSON } = render(
            <ScreenMain />
        );
   
        await act(async() => {})

        expect(toJSON().children.length).toBe(2);
        expect(mockedAxios.get).toHaveBeenCalledTimes(3)
    }); 

    it("Should navigate to ScreenLogin when user logout", async() => {
        mockRequestForegroundPermissionsAsync.mockResolvedValueOnce({"canAskAgain": true, "expires": "never", "granted": true, "status": "granted"} as any);
        mockGetCurrentPositionAsync.mockResolvedValueOnce({
            coords: {
            latitude: 40.7128,
            longitude: -74.0060,
            }
        } as any);

        const mockNavigate = jest.fn();

        mockedAxios.get.mockResolvedValueOnce(mockCity);
        mockedAxios.get.mockClear();
        mockedAxios.get.mockResolvedValueOnce(mockClimates);
        mockedAxios.get.mockClear();
        mockedAxios.get.mockResolvedValueOnce(mockClimatesTomorrow);

        const { getByText } = render(
            <AuthProvider>
                <ScreenMain navigation={{ navigate: mockNavigate }}/>
            </AuthProvider>
        );
        await act(async() => {})

        fireEvent.press(getByText("Sair"))

        await act(async() => {})

        expect(mockNavigate).toHaveBeenCalledWith('Login');     
    }); 
});