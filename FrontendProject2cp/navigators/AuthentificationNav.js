import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import MainScreen from "./MainNav";
import StartScreen from "../screens/StartScreen";

const FirstStack = createNativeStackNavigator();

export default function AuthentificationNav() {
  return (
    <FirstStack.Navigator
      initialRouteName="Start screen"
      screenOptions={{
        headerShown: false,
        animation: "none",
      }}
    >
      <FirstStack.Screen name="Start screen" component={StartScreen} />
      <FirstStack.Screen name="Login screen" component={LoginScreen} />
      <FirstStack.Screen name="Signup screen" component={SignupScreen} />
      <FirstStack.Screen name="Main screen" component={MainScreen} />
    </FirstStack.Navigator>
  );
}
