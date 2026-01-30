import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import FlashMessage from "react-native-flash-message";

import AuthStack from "./src/navigation/AuthStack";

export default function App() {
  return (
    <>
      <FlashMessage position={"top"} />

      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
