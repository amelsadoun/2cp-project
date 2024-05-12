import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "../screens/SettingsScreen";
import FAQScreen from "../screens/FAQScreen";
const ThirdStack = createNativeStackNavigator();

export default function SettingsNav() {
  return (
    <ThirdStack.Navigator
      initialRouteName="Settings screen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <ThirdStack.Screen name="Settings screen" component={SettingsScreen} />
      <ThirdStack.Screen name="FAQ screen" component={FAQScreen} />
    </ThirdStack.Navigator>
  );
}
