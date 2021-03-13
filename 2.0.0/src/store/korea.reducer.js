import * as ActionType from "./actions";

const INITIAL_STATE = [{}];

export const KoreaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.SAVE_CORONAMAP:
      return [...state];
    default:
      return INITIAL_STATE;
  }
};
