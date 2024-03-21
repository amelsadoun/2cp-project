import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainNav from "./MainNav";
import PreviewScreen from "../screens/PreviewScreen";

const FirstStack = createNativeStackNavigator();

export default function PreviewNav() {
  return (
    <FirstStack.Navigator
      initialRouteName="Preview screen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <FirstStack.Screen name="Preview screen" component={PreviewScreen} />
      <FirstStack.Screen name="Main screen" component={MainNav} />
    </FirstStack.Navigator>
  );
}
