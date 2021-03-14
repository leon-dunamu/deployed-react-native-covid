import { combineReducers, createStore } from "redux";
import { KoreaReducer } from "./korea.reducer";
import { MapReducer } from "./map.reducer";
import { WorldReducer } from "./world.reducer";
import { VaccineReducer } from "./vaccine.reducer";

const rootReducer = combineReducers({
  KoreaReducer,
  MapReducer,
  WorldReducer,
  VaccineReducer,
  // 다른 리듀서를 만들게되면 여기에 넣어줌..
});

const store = () =>
  createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;
