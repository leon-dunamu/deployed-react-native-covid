import * as ActionType from "./actions";

const INITIAL_STATE = [{}];

export const OtherReducer = (state = INITIAL_STATE, action) => {
  console.log("actiontype : ", action.type);
  switch (action.type) {
    case ActionType.SAVE_OTHER:
      return [...state];
    default:
      return INITIAL_STATE;
  }
};
