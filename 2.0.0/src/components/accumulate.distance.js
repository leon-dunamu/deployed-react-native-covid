/**
 * @description 환자와 나 사이 거리 재기
 */

const accumulateDistance = (props) => {
  let dis = 0;
  let disLat = Math.abs(props.lat - props._lat);
  let disLng = Math.abs(props.lng - props._lng);
  dis = Math.sqrt(
    Math.pow(
      (disLat % 100) * 88804 +
        Math.floor((disLat - (disLat % 100)) * 100) * 1480 +
        (disLat * 100 - Math.floor(disLat * 100)) * 24.668,
      2
    ) +
      Math.pow(
        (disLng % 100) * 88804 +
          Math.floor((disLng - (disLng % 100)) * 100) * 1480 +
          (disLng * 100 - Math.floor(disLng * 100)) * 24.668,
        2
      )
  );
  return dis;
};

export default accumulateDistance;
