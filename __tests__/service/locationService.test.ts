import { requestLocation } from "../../src/service/locationService";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from "expo-location";
import { Alert } from 'react-native';

const mockRequestForegroundPermissionsAsync = requestForegroundPermissionsAsync as jest.MockedFunction<typeof requestForegroundPermissionsAsync>;
const mockGetCurrentPositionAsync = getCurrentPositionAsync as jest.MockedFunction<typeof getCurrentPositionAsync>;


jest.mock('expo-location', () => ({
    requestForegroundPermissionsAsync: jest.fn(),
    getCurrentPositionAsync: jest.fn(),
  })
);

jest.mock('react-native', () => ({
    Alert: {
        alert: jest.fn(),
    }})
);

  describe('requestLocation', () => {

    beforeEach(() => {
        mockRequestForegroundPermissionsAsync.mockClear();
        mockGetCurrentPositionAsync.mockClear();
    });

    it('Should return the user`s location', async () => {
      mockRequestForegroundPermissionsAsync.mockResolvedValueOnce({"canAskAgain": true, "expires": "never", "granted": true, "status": "granted"} as any);
      mockGetCurrentPositionAsync.mockResolvedValueOnce({
        coords: {
          latitude: 40.7128,
          longitude: -74.0060,
        }
      } as any);

      const location = await requestLocation();

      expect(location).toEqual([40.7128, -74.0060]);
      expect(requestForegroundPermissionsAsync).toHaveBeenCalledTimes(1);
      expect(getCurrentPositionAsync).toHaveBeenCalledTimes(1);
    });

    it('Should return a alert when the user`s location is denied', async () => {
        mockRequestForegroundPermissionsAsync.mockResolvedValueOnce({"canAskAgain": false, "expires": "never", "granted": false, "status": "denied"} as any);
        
        const location = await requestLocation();

        expect(location).toEqual([-19.461045, -42.568050]);
        expect(requestForegroundPermissionsAsync).toHaveBeenCalledTimes(1);
        expect(Alert.alert).toHaveBeenCalledTimes(1);
      });
});