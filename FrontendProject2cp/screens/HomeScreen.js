import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import BackScreen from "../components/BackScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DeviceInfoScreen from "./DeviceInfoScreen";
import DevicesList from "../components/DevicesList";
const darkBlue = "#2F4062";
const SecondStack = createNativeStackNavigator();

export default function HomeScreen() {

  return (
    <SecondStack.Navigator
      initialRouteName="DevicesList"
      screenOptions={{
        headerShown: false,
      }}
    >
      <SecondStack.Screen
        name="DevicesList"
        component={DevicesList}
        options={{ title: "Devices" }}
      />
      <SecondStack.Screen
        name="DeviceDetails"
        component={DeviceInfoScreen}
        options={{ title: "Device Details"}}
      />
    </SecondStack.Navigator>
  );
}



