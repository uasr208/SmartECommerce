import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { ActivityIndicator, StyleSheet } from "react-native";
import FlashMessage from "react-native-flash-message";
import { Provider } from "react-redux";
import MainAppStack from "./src/navigation/MainAppStack";
import { store } from "./src/store/store";

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
      <Provider store={store}>
        <FlashMessage position={"top"} />

        <NavigationContainer>
          <MainAppStack />
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
