/**
 * @description 한국 코로나 상황 리듀서
 */

import * as ActionType from "./actions";

// const initType = {
//   createDt: "", //"2021-03-13 09:38:53.277",
//   deathCnt: 0, //4,
//   defCnt: 0, //3043,
//   gubun: "", //검역,
//   gubunCn: "", //隔離區,
//   gubunEn: "", //Lazaretto,
//   incDec: 0, //6,
//   isolClearCnt: 0, //2549,
//   isolIngCnt: 0, //490,
//   localOccCnt: 0, //0,
//   overFlowCnt: 0, //6,
//   qurRate: "-", //-,
//   seq: 0, //8215,
//   stdDay: "", //2021년 03월 13일 00시,
//   updateDt: null, //null
// };

// let INITIAL_STATE = Array(17).fill(initType);

const INITIAL_STATE = [
  {
    createDt: "", //"2021-03-13 09:38:53.277",
    deathCnt: 0, //4,
    defCnt: 0, //3043,
    gubun: "", //검역,
    gubunCn: "", //隔離區,
    gubunEn: "", //Lazaretto,
    incDec: 0, //6,
    isolClearCnt: 0, //2549,
    isolIngCnt: 0, //490,
    localOccCnt: 0, //0,
    overFlowCnt: 0, //6,
    qurRate: "-", //-,
    seq: 0, //8215,
    stdDay: "", //2021년 03월 13일 00시,
    updateDt: null, //null
  },
];

export const KoreaReducer = (state = INITIAL_STATE, action) => {
  console.log("kr reducer : ", action.type);
  switch (action.type) {
    case ActionType.SAVE_KOREA:
      return action.state;
    default:
      return state;
  }
};
