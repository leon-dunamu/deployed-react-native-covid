import React from "react";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import Router from "./src/Router";
import store from "./src/store/index";

const Store = store();

const App = () => {
  return (
    <Provider store={Store}>
      <Router />
    </Provider>
  );
};

export default App;
