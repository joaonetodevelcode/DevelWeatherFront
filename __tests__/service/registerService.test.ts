import { userRegister } from "../../src/service/registerService";
import axios from "axios";

const mockAxios = axios as jest.Mocked<typeof axios>;
jest.mock("axios");

describe("../../src/service/registerService", () => {

    const mockUser = {
        data: {
            user: {
                name: "Test",
                email: "teste@test.com",
                password: "teste123",
                cel: ""
            }
        }
        
    };

    beforeEach(() => {
        mockAxios.post.mockClear();
    })

    it("Should register a user", async () => {
        mockAxios.post.mockResolvedValueOnce(mockUser);

        const response = await userRegister(
            mockUser.data.user.name,
            mockUser.data.user.email,
            mockUser.data.user.password,
            mockUser.data.user.cel
        )

        expect(response).toEqual(mockUser.data);
        expect(mockAxios.post).toHaveBeenCalledTimes(1);
    });

    it("Should return a message when register fails", async () => {
        mockAxios.post.mockRejectedValueOnce("Nao foi possivel fazer o cadastro");

        const response = await userRegister(
            mockUser.data.user.name,
            mockUser.data.user.email,
            mockUser.data.user.password,
            mockUser.data.user.cel
        )

        expect(response).toEqual("Nao foi possivel fazer o cadastro");
        expect(mockAxios.post).toHaveBeenCalledTimes(1);
    });

});