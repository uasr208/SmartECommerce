import AppButton from "@/src/components/buttons/AppButton";

import AppTextInputController from "@/src/components/inputs/AppTextInputController";
import AppText from "@/src/components/texts/AppText";
import AppSaveView from "@/src/components/views/AppSaveView";
import { auth } from "@/src/config/firebase";
import { IMAGES } from "@/src/constants/images-paths";
import { setUserData } from "@/src/store/reducers/userSlice";
import { AppColors } from "@/src/styles/colors";
import { sharedPaddinghorizontal } from "@/src/styles/sharedStyles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { Image, StyleSheet } from "react-native";
import { showMessage } from "react-native-flash-message";
import { s, vs } from "react-native-size-matters";
import { useDispatch } from "react-redux";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email")
      .required("Email is required")
      .min(3, "Email must be at least 3 characters"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const SignInScreen = () => {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onLoginPress = async (data: FormData) => {
    console.log(data);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      navigation.navigate("MainAppBottomTabs");
      console.log(JSON.stringify(userCredential, null, 3));

      const userDataObj = {
        uid: userCredential.user.uid,
      };
      dispatch(setUserData(userDataObj));
    } catch (error: any) {
      let errorMessage = "";
      console.log(error.code);
      if (error.code === "auth/invalid-credential") {
        errorMessage = "Wrong email or password";
      } else if (error.code === "auth/user-not-found") {
        errorMessage = "User not found";
      } else {
        errorMessage = "Something went wrong";
      }

      showMessage({
        message: errorMessage,
        type: "danger",
      });
    }
  };

  return (
    <AppSaveView style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
      <AppTextInputController<FormData>
        placeholder="Email"
        control={control}
        name="email"
        keyBoardType={"email-address"}
      />
      <AppTextInputController<FormData>
        control={control}
        name="password"
        placeholder="Password"
        secureTextEntry
      />
      <AppText style={styles.appName}>Smart E-Commerce</AppText>
      <AppButton title="Login" onPress={handleSubmit(onLoginPress)} />
      <AppButton
        title="Sign Up"
        style={styles.registerButton}
        textColor={AppColors.primary}
        onPress={() => navigation.navigate("SignUpScreen")}
      />
    </AppSaveView>
  );
};

export default SignInScreen;

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
  registerButton: {
    backgroundColor: AppColors.white,
    borderWidth: 1,
    marginTop: vs(15),
    borderColor: AppColors.primary,
  },
});
