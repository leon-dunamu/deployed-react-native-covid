import * as ActionType from "./actions";

const INITIAL_STATE = [
  {
    _id: "", // "603dcc8386edad414db98cf2",
    region: "", // "경기",
    visitedDate: "", // "2021-02-28T15:00:00.000Z",
    latlng: "", // "37.6251506854686, 126.818310832256",
    address: "", // "경기 고양시 덕양구 토당동 288-4",
    placeEnglish: "", // "",
    place: "", // "포차포차(2/22~28)",
    createDate: "", // "2021-03-02T14:26:27.000Z",
    __v: 0, // 0
  },
];

export const MapReducer = (state = INITIAL_STATE, action) => {
  console.log("map reducer : ", action.type);
  switch (action.type) {
    case ActionType.SAVE_CORONAMAP:
      return action.state;
    default:
      return state;
  }
};
