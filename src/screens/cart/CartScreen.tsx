import AppButton from "@/src/components/buttons/AppButton";
import CartItem from "@/src/components/cart/CartItem";
import TotalView from "@/src/components/cart/TotalView";
import HomeHeader from "@/src/components/headers/HomeHeader";
import AppSaveView from "@/src/components/views/AppSaveView";
import { products } from "@/src/data/products";
import { sharedPaddinghorizontal } from "@/src/styles/sharedStyles";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

const CartScreen = () => {
  const navigation = useNavigation();
  return (
    <AppSaveView>
      <HomeHeader />
      {/* <EmptyCart /> */}
      <View style={{ paddingHorizontal: sharedPaddinghorizontal, flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return <CartItem {...item} />;
          }}
        />
        <TotalView itemPrice={5000} orderTotal={5025} />
        <AppButton
          title="Check Out"
          onPress={() => navigation.navigate("CheckoutScreen")}
        />
      </View>
    </AppSaveView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
