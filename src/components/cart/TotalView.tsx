import { shippingFee, taxes } from "@/src/constants/constants";
import { AppColors } from "@/src/styles/colors";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";

interface ITotalView {
  itemPrice: number;
  orderTotal: number;
}
const TotalView: FC<ITotalView> = ({ itemPrice, orderTotal }) => {
  return (
    <View>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>Items Price:</AppText>
        <AppText style={styles.textPrice}>${itemPrice}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>Taxes:</AppText>
        <AppText style={styles.textPrice}>${taxes}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>Shipping Fee:</AppText>
        <AppText style={styles.textPrice}>${shippingFee}</AppText>
      </View>
      <View style={styles.separator} />
      <View style={styles.row}>
        <AppText style={styles.textTitle}>Order Total:</AppText>
        <AppText style={styles.textPrice}>${orderTotal}</AppText>
      </View>
    </View>
  );
};

export default TotalView;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: vs(10),
  },
  textTitle: {
    fontSize: s(16),
    flex: 1,
  },
  textPrice: {
    fontSize: s(16),
    color: AppColors.primary,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: AppColors.blueGray,
    marginVertical: vs(5),
  },
});
