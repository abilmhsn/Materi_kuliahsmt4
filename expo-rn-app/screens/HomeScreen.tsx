import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import tw from "twrnc"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"

type HomeStackParamList = {
  HomeMain: undefined
  Dashboard: undefined
}

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>() // 👈 Pindahkan ke sini

  const features = [
    { id: 1, title: "Dashboard", icon: "grid-outline", color: "#3B82F6" },
    { id: 2, title: "Analytics", icon: "bar-chart-outline", color: "#10B981" },
    { id: 3, title: "Messages", icon: "mail-outline", color: "#F59E0B" },
    { id: 4, title: "Calendar", icon: "calendar-outline", color: "#EF4444" },
  ]

  return (
    <ScrollView style={tw`flex-1 bg-gray-50`}>
      <View style={tw`p-6`}>
        {/* Welcome Section */}
        <View style={tw`bg-white rounded-xl p-6 mb-6 shadow-sm`}>
          <Text style={tw`text-2xl font-bold text-gray-800 mb-2`}>Welcome Back! 👋</Text>
          <Text style={tw`text-gray-600 text-base`}>Here's what's happening with your app today.</Text>
        </View>

        {/* Stats Cards */}
        <View style={tw`flex-row justify-between mb-6`}>
          <View style={tw`bg-blue-500 rounded-xl p-4 flex-1 mr-2`}>
            <Text style={tw`text-white text-lg font-semibold`}>1,234</Text>
            <Text style={tw`text-blue-100 text-sm`}>Total Users</Text>
          </View>
          <View style={tw`bg-green-500 rounded-xl p-4 flex-1 ml-2`}>
            <Text style={tw`text-white text-lg font-semibold`}>89%</Text>
            <Text style={tw`text-green-100 text-sm`}>Success Rate</Text>
          </View>
        </View>

        {/* Features Grid */}
        <Text style={tw`text-xl font-bold text-gray-800 mb-4`}>Quick Actions</Text>
        <View style={tw`flex-row flex-wrap justify-between`}>
          {features.map((feature) => (
            <TouchableOpacity
              key={feature.id}
              style={tw`bg-white rounded-xl p-4 w-[48%] mb-4 shadow-sm items-center`}
              onPress={() => {
                if (feature.title === "Dashboard") {
                  navigation.navigate("Dashboard") // 👈 Navigasi ke Dashboard
                }
              }}
            >
              <View
                style={[
                  tw`w-12 h-12 rounded-full items-center justify-center mb-3`,
                  { backgroundColor: feature.color + "20" },
                ]}
              >
                <Ionicons name={feature.icon as any} size={24} color={feature.color} />
              </View>
              <Text style={tw`text-gray-800 font-medium text-center`}>{feature.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent Activity */}
        <View style={tw`bg-white rounded-xl p-6 mt-4 shadow-sm`}>
          <Text style={tw`text-lg font-bold text-gray-800 mb-4`}>Recent Activity</Text>
          {[1, 2, 3].map((item) => (
            <View key={item} style={tw`flex-row items-center py-3 border-b border-gray-100 last:border-b-0`}>
              <View style={tw`w-10 h-10 bg-blue-100 rounded-full items-center justify-center mr-3`}>
                <Ionicons name="notifications-outline" size={20} color="#3B82F6" />
              </View>
              <View style={tw`flex-1`}>
                <Text style={tw`text-gray-800 font-medium`}>New notification received</Text>
                <Text style={tw`text-gray-500 text-sm`}>2 minutes ago</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}
