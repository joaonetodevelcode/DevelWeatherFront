import { getCityName } from "../../src/api/apiGoogleMaps";
import axios from "axios";

const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock('axios')

describe("../../src/api/apiGoogleMaps", () => {

    beforeEach(() => {
        mockedAxios.get.mockClear();
    })

    describe("getCityName", () => {

        let latitude: number;
        let longitude: number;

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

        it("Should return the name city", async () => {
            mockedAxios.get.mockResolvedValueOnce(mockCity);

            const response = await getCityName(latitude, longitude);

            expect(response).toBe('City Name')
            expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        });

        it("Should return a message when requisition fails", async () => {
            mockedAxios.get.mockRejectedValueOnce('Requisição falhou');

            const response = await getCityName(latitude, longitude);

            expect(response).toBe('Requisição falhou')
            expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        });

    });

});