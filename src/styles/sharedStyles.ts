import { StyleSheet } from "react-native";
import { s } from "react-native-size-matters";
import { AppColors } from "./colors";

export const sharedPaddinghorizontal = s(12);

export const commonStyles = StyleSheet.create({
  shadow: {
    // ios
    shadowColor: AppColors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    // android
    elevation: 4,
  },
});
