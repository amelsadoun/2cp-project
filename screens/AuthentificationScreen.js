import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import MainScreen from "./MainScreen";
import StartScreen from "./StartScreen";

const FirstStack = createNativeStackNavigator();

export default function AuthentificationScreen() {
  return (
    <FirstStack.Navigator
      initialRouteName="Start screen"
      screenOptions={{ headerShown: false }}
    >
      <FirstStack.Screen name="Start screen" component={StartScreen} />
<FirstStack.Screen name="Login screen" component={LoginScreen} />
<FirstStack.Screen name="Signup screen" component={SignupScreen} />
    <FirstStack.Screen name="Main screen" component={MainScreen} /></FirstStack.Navigator>
  );
}
