import * as Location from "expo-location";

const getCoordinate = async () => {
  let coords = {
    latitude: 126.97806,
    longitude: 37.56667,
  };

  try {
    await Location.requestPermissionsAsync();
    coords = (await Location.getLastKnownPositionAsync()).coords; // getCurrentPositionAsync
  } catch (e) {
    console.log("location error", e);
  } finally {
    return coords;
  }
};

export default getCoordinate;
