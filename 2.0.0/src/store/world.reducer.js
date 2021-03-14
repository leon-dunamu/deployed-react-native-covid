import * as ActionType from "./actions";

const initType = {
  areaNm: "",
  areaNmCn: "",
  areaNmEn: "",
  createDt: "",
  natDeathCnt: "",
  natDeathRate: "",
  natDefCnt: "",
  nationNm: "",
  nationNmCn: "",
  nationNmEn: "",
  seq: "",
  stdDay: "",
  updateDt: "",
};

const INITIAL_STATE = Array(20).fill(initType);

export const WorldReducer = (state = INITIAL_STATE, action) => {
  console.log("other reducer : ", action.type);
  switch (action.type) {
    case ActionType.SAVE_WORLD:
      action.state.sort((a, b) => b.natDefCnt - a.natDefCnt);
      return action.state;
    default:
      return state;
  }
};
