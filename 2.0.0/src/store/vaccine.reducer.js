import * as ActionType from "./actions";

const initType = {
  accumulatedFirstCnt: -1, // 전일까지의 누적 통계 (1차 접종)
  accumulatedSecondCnt: -1, // 전일까지의 누적 통계 (2차 접종)
  baseDate: "", // 통계 기준일자
  firstCnt: -1, // 당일 통계(1차 접종)
  secondCnt: -1, // 당일 통계(2차 접종)
  sido: "", // 지역명칭
  totalFirstCnt: -1, // 전체 누적 통계(1차 접종)
  totalSecondCnt: -1, // 전체 누적 통계(2차 접종)
};

const INITIAL_STATE = Array(18).fill(initType);

export const VaccineReducer = (state = INITIAL_STATE, action) => {
  console.log("vaccine reducer : ", action.type);
  switch (action.type) {
    case ActionType.SAVE_VACCINE:
      return action.state;
    default:
      return state;
  }
};
