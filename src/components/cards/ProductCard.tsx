import { AppColors } from "@/src/styles/colors";
import { AppFonts } from "@/src/styles/fonts";
import { commonStyles } from "@/src/styles/sharedStyles";
import { Ionicons } from "@expo/vector-icons";
import React, { FC } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";

interface ProductCardProps {
  imageURl: string;
  title: string;
  price: number;
  onAddToCartPress: () => void;
}
const ProductCard: FC<ProductCardProps> = ({
  imageURl,
  title,
  price,
  onAddToCartPress,
}) => {
  return (
    <View style={styles.container}>
      {/* add to cart button */}
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={onAddToCartPress}
      >
        <Ionicons name="cart" size={s(15)} color={AppColors.white} />
      </TouchableOpacity>
      {/* image ui section */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: imageURl,
          }}
        />
      </View>
      {/* details ui section */}
      <View style={styles.detailsContainer}>
        <AppText style={styles.titleText}>{title}</AppText>
        <AppText style={styles.priceText}>{price}</AppText>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: s(160),
    height: vs(220),
    backgroundColor: AppColors.white,
    borderRadius: s(10),
    ...commonStyles.shadow,
  },
  imageContainer: {
    overflow: "hidden",
    borderTopLeftRadius: s(10),
    borderTopRightRadius: s(10),
    height: vs(140),
    width: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  detailsContainer: {
    flex: 1,
    paddingTop: s(8),
    paddingBottom: vs(15),
    paddingHorizontal: s(10),
  },
  titleText: {
    fontSize: s(14),
    fontFamily: AppFonts.Medium,
    color: AppColors.primary,
  },
  priceText: {
    fontSize: s(14),
    fontFamily: AppFonts.Bold,
    color: AppColors.primary,
    marginTop: vs(5),
  },
  addToCartButton: {
    height: s(28),
    width: s(28),
    position: "absolute",
    left: 5,
    top: 5,
    borderRadius: s(14),
    backgroundColor: AppColors.primary,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
