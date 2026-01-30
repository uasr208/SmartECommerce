import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { ActivityIndicator, StyleSheet } from "react-native";
import FlashMessage from "react-native-flash-message";
import MainAppStack from "./src/navigation/MainAppStack";

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_Bold: require("./src/assets/fonts/Nunito-Bold.ttf"),
    Nunito_Medium: require("./src/assets/fonts/Nunito-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return <ActivityIndicator size={"large"} />;
  }
  return (
    <>
      <FlashMessage position={"top"} />

      <NavigationContainer>
        <MainAppStack />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
