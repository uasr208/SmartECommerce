import AppButton from "@/src/components/buttons/AppButton";
import CartItem from "@/src/components/cart/CartItem";
import TotalView from "@/src/components/cart/TotalView";
import HomeHeader from "@/src/components/headers/HomeHeader";
import AppSaveView from "@/src/components/views/AppSaveView";
import { shippingFee, taxes } from "@/src/constants/constants";
import EmptyCart from "@/src/screens/cart/EmptyCart";
import {
  addItemTocart,
  removeItemFromCart,
  removeProductFromCart,
} from "@/src/store/reducers/cartSlice";
import { RootState } from "@/src/store/store";
import { sharedPaddinghorizontal } from "@/src/styles/sharedStyles";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const CartScreen = () => {
  const navigation = useNavigation();
  const { items } = useSelector((state: RootState) => state.cartSlice);
  const dispatch = useDispatch();
  const totalProductsPriceSum = items.reduce((acc, item) => acc + item.sum, 0);
  const orderTotal = totalProductsPriceSum + shippingFee + taxes;
  console.log(items);
  return (
    <AppSaveView>
      <HomeHeader />
      {items.length > 0 ? (
        <View style={{ paddingHorizontal: sharedPaddinghorizontal, flex: 1 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <CartItem
                  {...item}
                  price={item.sum}
                  onReducePress={() => {
                    dispatch(removeItemFromCart(item));
                  }}
                  onDeletePress={() => {
                    dispatch(removeProductFromCart(item));
                  }}
                  onIncreasePress={() => dispatch(addItemTocart(item))}
                />
              );
            }}
          />
          <TotalView
            itemPrice={totalProductsPriceSum}
            orderTotal={orderTotal}
          />
          <AppButton
            title="Check Out"
            onPress={() => navigation.navigate("CheckoutScreen")}
          />
        </View>
      ) : (
        <EmptyCart />
      )}
    </AppSaveView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
