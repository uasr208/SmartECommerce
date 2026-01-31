import AppButton from "@/src/components/buttons/AppButton";
import AppText from "@/src/components/texts/AppText";
import { AppColors } from "@/src/styles/colors";
import { AppFonts } from "@/src/styles/fonts";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { s, vs } from "react-native-size-matters";

const EmptyCart = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <MaterialIcons
        name="shopping-cart"
        size={s(100)}
        color={AppColors.primary}
        style={styles.icon}
      />
      <AppText style={styles.title}>Your Cart is Empty</AppText>
      <AppText style={styles.subTitle}>
        Browse Our Products andAdd items to your cart
      </AppText>
      <AppButton
        onPress={() => navigation.navigate("Home")}
        title="Start Shopping"
        style={styles.button}
      />
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: s(20),
  },
  title: {
    fontSize: s(20),
    fontFamily: AppFonts.Bold,
    color: AppColors.primary,
    marginBottom: vs(10),
  },
  subTitle: {
    fontSize: s(16),
    fontFamily: AppFonts.Medium,
    color: AppColors.medGray,
    textAlign: "center",
    marginBottom: vs(20),
  },
  button: {
    width: "80%",
  },
  icon: {
    marginBottom: vs(20),
    opacity: 0.9,
  },
});
