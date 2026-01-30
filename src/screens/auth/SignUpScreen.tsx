import AppButton from "@/src/components/buttons/AppButton";
import AppTextInput from "@/src/components/inputs/AppTextInput";
import AppText from "@/src/components/texts/AppText";
import AppSaveView from "@/src/components/views/AppSaveView";
import { IMAGES } from "@/src/constants/images-paths";
import { AppColors } from "@/src/styles/colors";
import { sharedPaddinghorizontal } from "@/src/styles/sharedStyles";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const navigation = useNavigation();

  return (
    <AppSaveView style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
      <AppTextInput placeholder="User Name" onChangeText={setUserName} />
      <AppTextInput placeholder="Email" onChangeText={setEmail} />
      <AppTextInput
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
      />
      <AppText style={styles.appName}>Smart E-Commerce</AppText>
      <AppButton title="Create New Account" />
      <AppButton
        title="Go ToSign In"
        style={styles.signInButton}
        textColor={AppColors.primary}
        onPress={() => navigation.navigate("SignInScreen")}
      />
    </AppSaveView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: sharedPaddinghorizontal,
  },
  logo: {
    height: s(150),
    width: s(150),
    marginBottom: vs(30),
  },
  appName: {
    fontSize: s(16),
    marginBottom: vs(15),
  },
  signInButton: {
    backgroundColor: AppColors.white,
    borderWidth: 1,
    marginTop: vs(15),
    borderColor: AppColors.primary,
  },
});
