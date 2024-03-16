import React from "react";
import MainNav from "./navigators/MainNav";
import AuthentificationNav from "./navigators/AuthentificationNav";
import { NavigationContainer } from "@react-navigation/native";
const userIsSignedIn = false;
const darkBlue = "#2F4062";

export default function App() {
  return (
    <NavigationContainer>
      {userIsSignedIn ? (
        <MainNav></MainNav>
      ) : (
        <AuthentificationNav></AuthentificationNav>
      )}
    </NavigationContainer>
  );
}
