/**
 * @author wonseog
 * @description 지도
 */

import React from "react";
import { WebView } from "react-native-webview";
import { GITPAGES_URL } from "../../config/urls";

const Map = () => <WebView source={{ uri: GITPAGES_URL }} />;

export default Map;
