import ProductCard from "@/src/components/cards/ProductCard";
import HomeHeader from "@/src/components/headers/HomeHeader";
import AppSaveView from "@/src/components/views/AppSaveView";
import { getProductsData } from "@/src/config/dataServices";
import { addItemTocart } from "@/src/store/reducers/cartSlice";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import { useDispatch } from "react-redux";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const data = await getProductsData();
    console.log(data);
    setProducts(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AppSaveView>
      <HomeHeader />
      <FlatList
        numColumns={2}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            imageURl={item.imageURL}
            title={item.title}
            price={item.price}
            onAddToCartPress={() => {
              dispatch(addItemTocart(item));
            }}
          />
        )}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: vs(10),
        }}
        contentContainerStyle={{
          paddingHorizontal: s(10),
        }}
      />
    </AppSaveView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
