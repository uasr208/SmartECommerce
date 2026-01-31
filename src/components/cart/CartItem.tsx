import { AppColors } from "@/src/styles/colors";
import { AppFonts } from "@/src/styles/fonts";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";

const CartItem = () => {
  return (
    <View style={styles.container}>
      {/* image container */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/a/ma658.jpg",
          }}
        />
      </View>
      {/* details container */}
      <View style={styles.detailsContainer}>
        <AppText style={styles.textTitle}>iPhone 16 Pro Max</AppText>
        <AppText style={styles.textPrice}>$1199</AppText>
        {/* quantity container */}
        <View style={styles.qtyContainer}>
          <Pressable style={styles.iconButton}>
            <FontAwesome name="plus" size={s(10)} color={AppColors.primary} />
          </Pressable>
          <AppText style={styles.textQty}>1</AppText>
          <Pressable style={styles.iconButton}>
            <FontAwesome name="minus" size={s(10)} color={AppColors.primary} />
          </Pressable>
        </View>
      </View>
      {/* delete button container */}
      <View style={styles.deleteContainer}>
        <Pressable style={styles.deleteButton}>
          <AntDesign name="delete" size={s(14)} color={AppColors.redColor} />
          <AppText style={styles.deleteText}>Delete</AppText>
        </Pressable>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    paddingBottom: vs(4),
    borderColor: AppColors.blueGray,
  },
  imageContainer: {
    flex: 1.5,

    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    flex: 3.5,
  },
  deleteContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingEnd: s(12),
  },
  image: {
    height: s(80),
    width: s(80),
    borderRadius: s(5),
  },
  textTitle: {
    fontSize: s(14),
    color: AppColors.primary,
    fontFamily: AppFonts.Medium,
    marginTop: vs(5),
  },
  textPrice: {
    fontSize: s(16),
    color: AppColors.primary,
    fontFamily: AppFonts.Bold,
    marginTop: vs(5),
  },
  deleteText: {
    fontSize: s(12),
    color: AppColors.medGray,
    fontFamily: AppFonts.Medium,
    marginTop: vs(3),
    marginLeft: s(7),
  },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  qtyContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: s(5),
    borderRadius: s(30),
    borderWidth: s(1),
    borderColor: AppColors.blueGray,
    width: s(80),
    paddingVertical: vs(5),
  },
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.blueGray,
    borderRadius: s(10),
    padding: s(5),
    width: s(20),
    height: s(20),
  },
  textQty: {
    flex: 1,
    textAlign: "center",
    color: AppColors.primary,
  },
});
