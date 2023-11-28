import { temperatureConversion } from "../../src/service/temperatureService";

describe("../../src/service/temperatureService", () => {

    it("Should convert temperature in kelvin for celsius", () => {

        const temperature = temperatureConversion("273")

        expect(temperature).toBe(0)
    })

})