import { ToastAndroid } from "react-native";

export const toastMessage = (message) => {
  ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    0,
    200
  );
};
