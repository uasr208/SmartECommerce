import { createStackNavigator } from "@react-navigation/stack";
import CheckoutScreen from "../screens/cart/CheckoutScreen";
import AuthStack from "./AuthStack";
import MainAppBottomTabs from "./MainAppBottomTabs";

const stack = createStackNavigator();

export default function MainAppStack() {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="AuthStack" component={AuthStack} />
      <stack.Screen name="MainAppBottomTabs" component={MainAppBottomTabs} />
      <stack.Screen
        name="CheckoutScreen"
        options={{ headerShown: true }}
        component={CheckoutScreen}
      />
    </stack.Navigator>
  );
}
