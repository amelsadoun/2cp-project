import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CommonHeader from "../components/CommonHeader";
import MyTabBar from "../components/MyTabBar";
import NotificationsScreen from "../screens/NotificationsScreen";
import DevicesScreen from "../screens/DevicesScreen";
import HomeNav from "./HomeNav";
import ProfileScreen from "../screens/ProfileScreen";
import { Switch, Text, View } from "react-native";
const darkBlue = "#2F4062";

const Tab = createBottomTabNavigator();

export default function MainNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => <CommonHeader />,
      }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={HomeNav}
        options={{ title: "Home" }}
      />
      <Tab.Screen name="Devices" component={DevicesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
}