/**
 * @description 한국 코로나 상황 리듀서
 */

import * as ActionType from "./actions";

const initType = {
  createDt: "", //"2021-03-13 09:38:53.277",
  deathCnt: "", //4,
  defCnt: "", //3043,
  gubun: "", //검역,
  gubunCn: "", //隔離區,
  gubunEn: "", //Lazaretto,
  incDec: "", //6,
  isolClearCnt: "", //2549,
  isolIngCnt: "", //490,
  localOccCnt: "", //0,
  overFlowCnt: "", //6,
  qurRate: "-", //-,
  seq: "", //8215,
  stdDay: "", //2021년 03월 13일 00시,
  updateDt: null, //null
};

let INITIAL_STATE = Array(17).fill(initType);

export const KoreaReducer = (state = INITIAL_STATE, action) => {
  console.log("kr reducer : ", action.type);
  switch (action.type) {
    case ActionType.SAVE_KOREA:
      action.state.sort((a, b) => b.incDec - a.incDec);
      return action.state;

    case ActionType.SORT_KOREA_INCDEC:
      if (action.order) {
        // 일별 내림차순
        let list = [...action.state];
        // return action.state;
        list.sort((a, b) => b.incDec - a.incDec);
        return list;
      } else {
        // 누적 내림차순
        let list = [...action.state];
        // return action.state;
        list.sort((a, b) => b.defCnt - a.defCnt);
        return list;
      }

    case ActionType.SORT_KOREA_REGION:
      if (action.order) {
        // 지역 내림차순
        let list = [...action.state];
        // return action.state;
        list.sort((a, b) => b.localOccCnt - a.localOccCnt);
        return list;
      } else {
        // 해외 내림차순
        let list = [...action.state];
        // return action.state;
        list.sort((a, b) => b.overFlowCnt - a.overFlowCnt);
        return list;
      }

    default:
      return state;
  }
};
