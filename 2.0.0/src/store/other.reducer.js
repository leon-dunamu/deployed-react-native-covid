import * as ActionType from "./actions";

const INITIAL_STATE = [{}];

export const OtherReducer = (state = INITIAL_STATE, action) => {
  console.log("other reducer : ", action.type);
  switch (action.type) {
    case ActionType.SAVE_OTHER:
      return action.state;
    default:
      return state;
  }
};
