// screens/HomeStack.tsx
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./HomeScreen"
import DashboardScreen from "./DashboardScreen"

const Stack = createNativeStackNavigator()

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ title: "Home" }} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  )
}
