import AppButton from "@/src/components/buttons/AppButton";
import AppTextInputController from "@/src/components/inputs/AppTextInputController";

import AppText from "@/src/components/texts/AppText";
import AppSaveView from "@/src/components/views/AppSaveView";
import { IMAGES } from "@/src/constants/images-paths";
import { AppColors } from "@/src/styles/colors";
import { sharedPaddinghorizontal } from "@/src/styles/sharedStyles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useForm } from "react-hook-form";
import { Alert, Image, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import * as yup from "yup";

const schema = yup
  .object({
    userName: yup
      .string()
      .required("User name is required")
      .min(3, "User name must be at least 3 characters"),
    email: yup.string().email("Invalid email").required("Email is required"),

    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const SignUpScreen = () => {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const navigation = useNavigation();
  const onSignUpPress = () => {
    Alert.alert("Sign Up Success");
    navigation.navigate("MainAppBottomTabs");
  };
  return (
    <AppSaveView style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
      <AppTextInputController<FormData>
        control={control}
        name="userName"
        placeholder="User Name"
      />
      <AppTextInputController<FormData>
        placeholder="Email"
        control={control}
        name="email"
        keyBoardType={"email-address"}
      />
      <AppTextInputController<FormData>
        placeholder="Password"
        control={control}
        name="password"
        secureTextEntry
      />
      <AppText style={styles.appName}>Smart E-Commerce</AppText>
      <AppButton
        title="Create New Account"
        onPress={handleSubmit(onSignUpPress)}
      />
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
