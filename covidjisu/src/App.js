import React from "react";
import { Provider } from "react-redux";
import Router from "./Router";
import store from "./store/index";

const Store = store();

const App = () => {
  return (
    <Provider store={Store}>
      <Router />
    </Provider>
  );
};

export default App;
