import React from "react";
import MainNav from "./navigators/MainNav";
import PreviewNav from "./navigators/PreviewNav";
import { NavigationContainer } from "@react-navigation/native";
const appUsedBefore = false;
const darkBlue = "#2F4062";

export default function App() {
  return (
    <NavigationContainer>
      {appUsedBefore ? (
        <MainNav></MainNav>
      ) : (
        <PreviewNav></PreviewNav>
      )}
    </NavigationContainer>
  );
}
