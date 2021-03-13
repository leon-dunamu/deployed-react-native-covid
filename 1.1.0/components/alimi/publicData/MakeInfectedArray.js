
import Patient from '../../../InfectedData.json';
import DateGapAcumulator from '../make/DateGapAcumulator';
import PositionDistance from '../make/PositionDistance';

let Count = 0;
const JSON_URL = 'https://ugxtzdljzj.execute-api.ap-northeast-2.amazonaws.com/2020-08-04/covid';

const AddCount = () => {
    Count++;
}


const makeArrayPatient = (latitude , longitude ) => {

  const getData = () => {
    // const data = await axios.get(JSON_URL);
    // return data.data;
    return fetch(JSON_URL)
            .then(response => {return response.json()})
            .then(resp => {
              console.log(resp[0]);
              return resp;
            })
  }  

  let PatientInfo = [];
  let data;
  

  if(true) {
    Patient.data.map((value) => {
      let daysGap ;
      // daysGap = isInFewDays(value.month, value.day);
      const curDay = {
        _month : value.month,
        _date : value.day
      }
      daysGap = DateGapAcumulator(curDay);
      if(daysGap <= 10){
        let sliced =  value.latlng.split(', ');
        let patient = {
          position : value.address,
          lat : parseFloat(sliced[0]),
          lng : parseFloat(sliced[1]),
          month : value.month,
          day : value.day
        }
        PatientInfo = [...PatientInfo, patient];

        let distance;
        const getDistance  = {
          lat : latitude,
          lng : longitude,
          _lat : patient.lat,
          _lng : patient.lng
        }
        distance = PositionDistance(getDistance);
        if(distance < 3600){
          AddCount();
        }
      }
    });
  }
  return [PatientInfo, Count];
}

  export default makeArrayPatient;