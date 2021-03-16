import moment from "moment";
import accumulateDistance from "./accumulate.distance";

const accumulateJisu = (myCoordinates, MapReducer) => {
  let cnt = 0;
  MapReducer.map((value) => {
    const daysGap = moment(new Date()).diff(moment(value.visitedDate), "days");

    if (daysGap <= 14) {
      const patientCoords = value.latlng.split(", ");
      const patient = {
        position: value.address,
        lat: parseFloat(patientCoords[0]),
        lng: parseFloat(patientCoords[1]),
        month: value.month,
        day: value.day,
      };

      const getDistance = {
        lat: myCoordinates.latitude,
        lng: myCoordinates.longitude,
        _lat: patient.lat,
        _lng: patient.lng,
      };
      distance = accumulateDistance(getDistance);
      if (distance < 3600) {
        cnt = cnt + 1;
      }
    }
  });
  return cnt;
};

export default accumulateJisu;
