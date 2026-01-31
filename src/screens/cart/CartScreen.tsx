import CartItem from "@/src/components/cart/CartItem";
import HomeHeader from "@/src/components/headers/HomeHeader";
import AppSaveView from "@/src/components/views/AppSaveView";
import React from "react";
import { StyleSheet } from "react-native";

const CartScreen = () => {
  return (
    <AppSaveView>
      <HomeHeader />
      {/* <EmptyCart /> */}
      <CartItem />
    </AppSaveView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
