import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { StatusBar } from "expo-status-bar"
import { Ionicons } from "@expo/vector-icons"
import ProfileScreen from "./screens/ProfileScreen"
import SettingsScreen from "./screens/SettingsScreen"
import AbilScreen from "./screens/AboutScreen"
import HomeStack from "./screens/HomeStack" 
import HomeScreen from "./screens/DashboardScreen" 

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline"
            } else if (route.name === "Dashboard") {
              iconName = focused ? "cart" : "cart-outline"
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline"
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline"
            } else if (route.name === "About") {
              iconName = focused ? "information-circle" : "information-circle-outline"
            } else {
              iconName = "home-outline"
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: "#3B82F6",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
          headerStyle: {
            backgroundColor: "#3B82F6",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Dashboard" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="About" component={AbilScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
