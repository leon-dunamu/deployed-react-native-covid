/**
 * @author wonseog
 * @description 지도
 */

import React from "react";
import { ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
import { GITPAGES_URL } from "../../config/urls";
import { Height, Width } from "../../assets/style/dimension";

const loading = () => (
  <ActivityIndicator
    style={{ position: "absolute", top: Height / 2, left: Width / 2 }}
    size="large"
  />
);

const Map = () => {
  const [isLoading, setLoading] = React.useState(true);

  return (
    <WebView
      source={{ uri: GITPAGES_URL }}
      onLoad={() => setLoading(false)}
      renderLoading={() => loading()}
      startInLoadingState={true}
      javaScriptEnabled={true}
      domStorageEnabled={true}
    />
  );
};

export default Map;
