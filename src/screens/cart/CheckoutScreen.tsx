import AppButton from "@/src/components/buttons/AppButton";
import AppTextInputController from "@/src/components/inputs/AppTextInputController";
import AppSaveView from "@/src/components/views/AppSaveView";
import { db } from "@/src/config/firebase";
import {
  IS_Android,
  IS_IOS,
  shippingFee,
  taxes,
} from "@/src/constants/constants";
import { emptyCart } from "@/src/store/reducers/cartSlice";
import { RootState } from "@/src/store/store";
import { AppColors } from "@/src/styles/colors";
import {
  commonStyles,
  sharedPaddinghorizontal,
} from "@/src/styles/sharedStyles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { addDoc, collection, doc } from "firebase/firestore";
import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { showMessage } from "react-native-flash-message";
import { s, vs } from "react-native-size-matters";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

const schema = yup
  .object({
    fullName: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Phone number must be a valid number")
      .min(10, "Phone number must be at least 10 digits"),
    detailedAddress: yup
      .string()
      .required("Address is required")
      .min(15, "Address must be at least 15 characters"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;
const CheckoutScreen = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { userData } = useSelector((state: RootState) => state.userSlice);
  const { items } = useSelector((state: RootState) => state.cartSlice);
  const totalProductsPriceSum = items.reduce((acc, item) => acc + item.sum, 0);
  const totalPrice = totalProductsPriceSum + shippingFee + taxes;

  const saveOrder = async (formData: FormData) => {
    try {
      const orderBody = {
        ...formData,
        items,
        totalProductsPriceSum,
        createdAt: new Date(),
        totalPrice,
      };
      const userOrderRef = collection(doc(db, "users", userData.uid), "orders");
      await addDoc(userOrderRef, orderBody);

      const orderRef = collection(db, "orders");
      await addDoc(orderRef, orderBody);

      showMessage({ type: "success", message: "Order saved successfully" });
      navigation.goBack();
      dispatch(emptyCart());
      console.log(formData);
    } catch (error) {
      console.error("Error saving order:", error);
      showMessage({ type: "danger", message: "Something went wrong" });
    }
  };
  return (
    <AppSaveView>
      <View style={{ paddingHorizontal: sharedPaddinghorizontal }}>
        <View style={styles.inputsContainer}>
          <AppTextInputController
            control={control}
            name={"fullName"}
            placeholder="Name"
          />
          <AppTextInputController
            control={control}
            name={"phoneNumber"}
            placeholder="Phone Number"
          />
          <AppTextInputController
            control={control}
            name={"detailedAddress"}
            placeholder="Address"
          />
        </View>
      </View>
      <View style={styles.bottomButtonContainer}>
        <AppButton title="Confirm" onPress={handleSubmit(saveOrder)} />
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
