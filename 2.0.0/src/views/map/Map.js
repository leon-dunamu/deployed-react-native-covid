/**
 * @author wonseog
 * @description 지도
 */

import React from "react";
import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
import { GITPAGES_URL } from "../../config/urls";

const Map = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: GITPAGES_URL }} />
    </SafeAreaView>
  );
};

export default Map;
