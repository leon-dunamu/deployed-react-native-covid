import * as ActionType from "./actions";

const initType = {
  countryName: "",
  countryEnName: "",
  title: "",
  content: "",
  fileUrl: "",
  wrtDt: "",
};

const INITIAL_STATE = Array(20).fill(initType);

export const NewsReducer = (state = INITIAL_STATE, action) => {
  console.log("news reducer : ", action.type);
  switch (action.type) {
    case ActionType.SAVE_NEWS:
      return action.state;
    case ActionType.SAVE_MORE_NEWS:
      let list = [...new Set([...state, ...action.state])];

      return list;
    default:
      return state;
  }
};
