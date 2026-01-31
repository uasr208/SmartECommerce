import AppButton from "@/src/components/buttons/AppButton";
import AppTextInput from "@/src/components/inputs/AppTextInput";
import AppSaveView from "@/src/components/views/AppSaveView";
import { IS_Android, IS_IOS } from "@/src/constants/constants";
import { AppColors } from "@/src/styles/colors";
import {
  commonStyles,
  sharedPaddinghorizontal,
} from "@/src/styles/sharedStyles";
import React from "react";
import { StyleSheet, View } from "react-native";
import { s, vs } from "react-native-size-matters";

const CheckoutScreen = () => {
  return (
    <AppSaveView>
      <View style={{ paddingHorizontal: sharedPaddinghorizontal }}>
        <View style={styles.inputsContainer}>
          <AppTextInput placeholder="Name" />
          <AppTextInput placeholder="Phone Number" />
          <AppTextInput placeholder="Address" />
        </View>
      </View>
      <View style={styles.bottomButtonContainer}>
        <AppButton title="Confirm" />
      </View>
    </AppSaveView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  inputsContainer: {
    ...commonStyles.shadow,
    padding: s(8),
    borderRadius: s(8),
    backgroundColor: AppColors.white,
    marginTop: IS_IOS ? vs(15) : undefined,
    paddingTop: vs(15),
  },
  bottomButtonContainer: {
    paddingHorizontal: sharedPaddinghorizontal,
    position: "absolute",
    width: "100%",
    bottom: IS_Android ? vs(15) : 0,
    borderTopWidth: 1,
    borderColor: AppColors.lightGray,
    paddingTop: vs(10),
  },
});
