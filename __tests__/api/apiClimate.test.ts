import { getCurrentClimateData, getTomorrowClimateData } from "../../src/api/apiClimate";
import axios from "axios";
const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock('axios')

const mockResponse = [ 'scattered clouds', 303.6, 303.26, 303.26, 66, 6.17, 40 ]


describe("../../src/api/apiClimate", () => {

    beforeEach(() => {
        mockedAxios.get.mockClear();
    })

    describe("getCurrentClimateData" , () => {

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
        
        
        it('Should return data climates', async () => {
            mockedAxios.get.mockResolvedValueOnce(mockClimates)

            const response = await getCurrentClimateData('cityname');
            
            expect(response).toEqual(mockResponse);
            expect(mockedAxios.get).toHaveBeenCalledTimes(1)
        });

        it('Should return a message when requisition fails', async () => {
            mockedAxios.get.mockRejectedValueOnce('Requisição falhou')

            const response = await getCurrentClimateData('cityname');
            
            expect(response).toEqual(['Requisição falhou']);
            expect(mockedAxios.get).toHaveBeenCalledTimes(1)
        });

    });

    describe("getTomorrowClimateData" , () => {

        const mockClimates = {
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
        
        
        it('Should return tomorrow data climates', async () => {
            mockedAxios.get.mockResolvedValueOnce(mockClimates)

            const response = await getTomorrowClimateData('cityname');
            
            expect(response).toEqual(mockResponse);
            expect(mockedAxios.get).toHaveBeenCalledTimes(1)            
        });

        it('Should return a message when requisition fails', async () => {
            mockedAxios.get.mockRejectedValueOnce('Requisição falhou')

            const response = await getTomorrowClimateData('cityname');
            
            expect(response).toEqual(['Requisição falhou']);
            expect(mockedAxios.get).toHaveBeenCalledTimes(1)
        });

    });

    


})