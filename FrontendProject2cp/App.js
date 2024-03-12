import React from "react";
import MainScreen from "./screens/MainScreen";
import AuthentificationScreen from "./screens/AuthentificationScreen";
import { NavigationContainer } from "@react-navigation/native";
const userIsSignedIn = true;
const darkBlue = "#2F4062";

export default function App() {
  return (
    <NavigationContainer>
      {userIsSignedIn ? (
        <MainScreen></MainScreen>
      ) : (
        <AuthentificationScreen></AuthentificationScreen>
      )}
    </NavigationContainer>
  );
}
