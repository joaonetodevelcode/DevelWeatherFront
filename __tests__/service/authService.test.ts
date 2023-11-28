import { userLogin } from "../../src/service/authService";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const mockAxios = axios as jest.Mocked<typeof axios>;
jest.mock("axios");

const mockAsyncStorage = AsyncStorage as jest.Mocked<typeof AsyncStorage>;
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

describe("../../src/service/authService", () => {

    const mockUser = {
        data: {
            user: {
                email: "teste@test.com",
                password: "teste123"
            }
        }
        
    };

    const mockItem = `${mockUser.data.user.email}, ${mockUser.data.user.password}`

    beforeEach(() => {
        mockAxios.post.mockClear();
        mockAsyncStorage.setItem.mockClear();
    });

    it("Should log in and save the email and password of the user", async () => {
        mockAxios.post.mockResolvedValueOnce(mockUser);

        const response = await userLogin(mockUser.data.user.email, mockUser.data.user.password);
        
        expect(response).toEqual(mockUser.data);
        expect(mockAxios.post).toHaveBeenCalledTimes(1);
        expect(AsyncStorage.setItem).toHaveBeenCalledWith("user", mockItem);
        expect(AsyncStorage.setItem).toHaveBeenCalledTimes(1);
    });

    it("Should return a message when log in fails", async () => {
        mockAxios.post.mockRejectedValueOnce("Nao foi possivel fazer login");

        const response = await userLogin(mockUser.data.user.email, mockUser.data.user.password);
        
        expect(response).toEqual("Nao foi possivel fazer login");
        expect(mockAxios.post).toHaveBeenCalledTimes(1);
        expect(AsyncStorage.setItem).toHaveBeenCalledTimes(0);
    })

});