import CartScreen from "@/src/screens/cart/CartScreen";
import HomeScreen from "@/src/screens/home/HomeScreen";
import ProfileScreen from "@/src/screens/profile/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { s, vs } from "react-native-size-matters";
import { IS_Android } from "../constants/constants";
import { AppColors } from "../styles/colors";
const Tab = createBottomTabNavigator();

export default function MainAppBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: AppColors.primary,
        tabBarLabelStyle: {
          marginTop: vs(4),
          fontSize: s(12),
        },
        tabBarStyle: IS_Android && { height: vs(60) },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          title: "Home",
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" color={color} size={size} />
          ),
          title: "Cart",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
          title: "Profile",
        }}
      />
    </Tab.Navigator>
  );
}
