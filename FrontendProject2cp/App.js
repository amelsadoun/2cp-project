import React from "react";
import MainNav from "./navigators/MainNav";
import PreviewNav from "./navigators/PreviewNav";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "./contexts/ThemeContext";
const appUsedBefore = false;

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        {appUsedBefore ? <MainNav></MainNav> : <PreviewNav></PreviewNav>}
      </NavigationContainer>
    </ThemeProvider>
  );
}
