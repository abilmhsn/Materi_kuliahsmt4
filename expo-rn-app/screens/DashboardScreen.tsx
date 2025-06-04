"use client"

import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from "react-native"
import tw from "twrnc"
import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = [
    { id: "all", name: "All", icon: "grid-outline" },
    { id: "tshirt", name: "T-Shirts", icon: "shirt-outline" },
    { id: "shoes", name: "Shoes", icon: "footsteps-outline" },
    { id: "pants", name: "Pants", icon: "body-outline" },
    { id: "jacket", name: "Jackets", icon: "layers-outline" },
  ]

  const products = [
    {
      id: 1,
      name: "Adidas Ultraboost 22",
      category: "shoes",
      price: 180,
      originalPrice: 220,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
      isNew: true,
    },
    {
      id: 2,
      name: "Essential T-Shirt",
      category: "tshirt",
      price: 35,
      originalPrice: 45,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
      isNew: false,
    },
    {
      id: 3,
      name: "Track Pants",
      category: "pants",
      price: 65,
      originalPrice: 80,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.6,
      isNew: true,
    },
    {
      id: 4,
      name: "Wind Jacket",
      category: "jacket",
      price: 120,
      originalPrice: 150,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.7,
      isNew: false,
    },
    {
      id: 5,
      name: "Stan Smith Sneakers",
      category: "shoes",
      price: 100,
      originalPrice: 120,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.9,
      isNew: false,
    },
    {
      id: 6,
      name: "Performance Tee",
      category: "tshirt",
      price: 40,
      originalPrice: 50,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.4,
      isNew: true,
    },
    {
      id: 7,
      name: "Jogger Pants",
      category: "pants",
      price: 75,
      originalPrice: 90,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
      isNew: false,
    },
    {
      id: 8,
      name: "Hoodie Jacket",
      category: "jacket",
      price: 95,
      originalPrice: 110,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.6,
      isNew: true,
    },
  ]

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory.toLowerCase())

  const featuredProducts = products.filter((product) => product.isNew).slice(0, 3)

  return (
    <ScrollView style={tw`flex-1 bg-gray-50`} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={tw`bg-white px-6 pt-4 pb-6`}>
        <View style={tw`flex-row items-center justify-between mb-4`}>
          <View>
            <Text style={tw`text-2xl font-bold text-gray-800`}>Adidas Store</Text>
            <Text style={tw`text-gray-600`}>Impossible is Nothing</Text>
          </View>
          <TouchableOpacity style={tw`relative`}>
            <Ionicons name="bag-outline" size={24} color="#000" />
            <View style={tw`absolute -top-2 -right-2 bg-red-500 w-5 h-5 rounded-full items-center justify-center`}>
              <Text style={tw`text-white text-xs font-bold`}>3</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={tw`flex-row items-center bg-gray-100 rounded-xl px-4 py-3`}>
          <Ionicons name="search-outline" size={20} color="#666" />
          <TextInput
            placeholder="Search products..."
            style={tw`flex-1 ml-3 text-gray-800`}
            placeholderTextColor="#666"
          />
          <TouchableOpacity>
            <Ionicons name="options-outline" size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Featured Banner */}
      <View style={tw`mx-6 mb-6`}>
        <View style={tw`bg-black rounded-2xl p-6 relative overflow-hidden`}>
          <View style={tw`absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16`} />
          <Text style={tw`text-white text-2xl font-bold mb-2`}>New Collection</Text>
          <Text style={tw`text-gray-300 mb-4`}>Up to 50% off on selected items</Text>
          <TouchableOpacity style={tw`bg-white px-6 py-3 rounded-full self-start`}>
            <Text style={tw`text-black font-bold`}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <View style={tw`mb-6`}>
        <Text style={tw`text-xl font-bold text-gray-800 px-6 mb-4`}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`px-6`}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={tw`mr-4 items-center ${
                selectedCategory === category.name ? "bg-black" : "bg-white"
              } px-4 py-3 rounded-xl shadow-sm min-w-20`}
              onPress={() => setSelectedCategory(category.name)}
            >
              <Ionicons
                name={category.icon as any}
                size={24}
                color={selectedCategory === category.name ? "white" : "#666"}
              />
              <Text
                style={tw`text-sm font-medium mt-2 ${
                  selectedCategory === category.name ? "text-white" : "text-gray-600"
                }`}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Featured Products */}
      {selectedCategory === "All" && (
        <View style={tw`mb-6`}>
          <View style={tw`flex-row items-center justify-between px-6 mb-4`}>
            <Text style={tw`text-xl font-bold text-gray-800`}>New Arrivals</Text>
            <TouchableOpacity>
              <Text style={tw`text-blue-600 font-medium`}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`px-6`}>
            {featuredProducts.map((product) => (
              <TouchableOpacity key={product.id} style={tw`mr-4 w-40`}>
                <View style={tw`bg-white rounded-xl p-4 shadow-sm`}>
                  <View style={tw`relative`}>
                    <Image source={{ uri: product.image }} style={tw`w-full h-32 rounded-lg bg-gray-100`} />
                    {product.isNew && (
                      <View style={tw`absolute top-2 left-2 bg-red-500 px-2 py-1 rounded-full`}>
                        <Text style={tw`text-white text-xs font-bold`}>NEW</Text>
                      </View>
                    )}
                    <TouchableOpacity
                      style={tw`absolute top-2 right-2 bg-white w-8 h-8 rounded-full items-center justify-center`}
                    >
                      <Ionicons name="heart-outline" size={16} color="#666" />
                    </TouchableOpacity>
                  </View>
                  <Text style={tw`text-gray-800 font-medium mt-3 text-sm`} numberOfLines={2}>
                    {product.name}
                  </Text>
                  <View style={tw`flex-row items-center mt-1`}>
                    <Ionicons name="star" size={12} color="#FFC107" />
                    <Text style={tw`text-gray-600 text-xs ml-1`}>{product.rating}</Text>
                  </View>
                  <View style={tw`flex-row items-center mt-2`}>
                    <Text style={tw`text-black font-bold text-lg`}>${product.price}</Text>
                    <Text style={tw`text-gray-400 text-sm line-through ml-2`}>${product.originalPrice}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      {/* Products Grid */}
      <View style={tw`px-6 mb-6`}>
        <View style={tw`flex-row items-center justify-between mb-4`}>
          <Text style={tw`text-xl font-bold text-gray-800`}>
            {selectedCategory === "All" ? "All Products" : selectedCategory}
          </Text>
          <View style={tw`flex-row items-center`}>
            <TouchableOpacity style={tw`mr-3`}>
              <Ionicons name="swap-vertical-outline" size={20} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="grid-outline" size={20} color="#666" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={tw`flex-row flex-wrap justify-between`}>
          {filteredProducts.map((product) => (
            <TouchableOpacity key={product.id} style={tw`w-[48%] mb-4`}>
              <View style={tw`bg-white rounded-xl p-4 shadow-sm`}>
                <View style={tw`relative`}>
                  <Image source={{ uri: product.image }} style={tw`w-full h-40 rounded-lg bg-gray-100`} />
                  {product.isNew && (
                    <View style={tw`absolute top-2 left-2 bg-red-500 px-2 py-1 rounded-full`}>
                      <Text style={tw`text-white text-xs font-bold`}>NEW</Text>
                    </View>
                  )}
                  <TouchableOpacity
                    style={tw`absolute top-2 right-2 bg-white w-8 h-8 rounded-full items-center justify-center shadow-sm`}
                  >
                    <Ionicons name="heart-outline" size={16} color="#666" />
                  </TouchableOpacity>
                </View>
                <Text style={tw`text-gray-800 font-medium mt-3 text-sm`} numberOfLines={2}>
                  {product.name}
                </Text>
                <View style={tw`flex-row items-center mt-1`}>
                  <Ionicons name="star" size={12} color="#FFC107" />
                  <Text style={tw`text-gray-600 text-xs ml-1`}>{product.rating}</Text>
                </View>
                <View style={tw`flex-row items-center justify-between mt-2`}>
                  <View>
                    <Text style={tw`text-black font-bold text-lg`}>${product.price}</Text>
                    <Text style={tw`text-gray-400 text-sm line-through`}>${product.originalPrice}</Text>
                  </View>
                  <TouchableOpacity style={tw`bg-black w-8 h-8 rounded-full items-center justify-center`}>
                    <Ionicons name="add" size={16} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Bottom Spacing */}
      <View style={tw`h-20`} />
    </ScrollView>
  )
}
