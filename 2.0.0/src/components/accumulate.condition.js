const accumulateCondition = (patientCount) => {
  let stateAlimi = {};

  if (patientCount < 1) {
    stateAlimi = {
      conditionTxt: "좋음",
      conditionFace: "happy-outline",
      conditionBgColor: 1,
    };
  } else if (1 <= patientCount && patientCount <= 3) {
    stateAlimi = {
      conditionTxt: "보통",
      conditionFace: "happy-outline",
      conditionBgColor: 2,
    };
  } else if (4 <= patientCount && patientCount <= 8) {
    stateAlimi = {
      conditionTxt: "위험",
      conditionFace: "sad-outline",
      conditionBgColor: 3,
    };
  } else if (9 <= patientCount) {
    stateAlimi = {
      conditionTxt: "심각",
      conditionFace: "sad-outline",
      conditionBgColor: 4,
    };
  } else if (20 <= patientCount) {
    stateAlimi = {
      conditionTxt: "최악",
      conditionFace: "hand-right",
      conditionBgColor: 5,
    };
  }
  return stateAlimi;
};

export default accumulateCondition;
