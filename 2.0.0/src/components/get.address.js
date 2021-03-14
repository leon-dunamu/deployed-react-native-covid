import * as Location from "expo-location";
import convertRegion from "./convert.region";
const getAddress = async (coords) => {
  let city = "";
  let street = "";
  let country = "";
  let region = "";
  try {
    const [myAddress] = await Location.reverseGeocodeAsync(coords);
    // 특별시, 광역시는 city값이 null임을 확인

    if (myAddress.city === null) {
      myAddress.city = myAddress.region;
    }
    city = myAddress.city;
    street = myAddress.street;
    country = myAddress.isoCountryCode;
    region = convertRegion(myAddress.region);
  } catch (e) {
    console.log("address error", e);
  } finally {
    if (!city && !street) {
      city = "위치";
      street = " 실패";
    }
    return [city, street, country, region];
  }
};

export default getAddress;
