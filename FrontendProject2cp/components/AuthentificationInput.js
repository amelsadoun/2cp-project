import React from "react";
import { useState } from "react";
import { PaperProvider, TextInput } from "react-native-paper";
import {
  Pressable,
  ScrollView,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { useFonts } from "expo-font";
import Logo from "../icons/Logo";
const white = "#FEFEFF";
const darkBlue = "#2F4062";
const yellow = "#F3F0A6";

export default function AuthentificationInput({
  label,
  icon,
  onChange,
  value,
}) {
  const [fontsLoaded] = useFonts({
    MontserratBold: require("../assets/fonts/MontserratAlt1-Bold.otf"),
    MontserratLight: require("../assets/fonts/MontserratAlt1-Light.otf"),
    MontserratExtraLight: require("../assets/fonts/MontserratAlt1-ExtraLight.otf"),
    MontserratExtraBold: require("../assets/fonts/MontserratAlt1-ExtraBold.otf"),
    MontserratMedium: require("../assets/fonts/MontserratAlt1-Medium.otf"),
    MontserratRegular: require("../assets/fonts/MontserratAlt1-Regular.otf"),
    MontserratSemiBold: require("../assets/fonts/MontserratAlt1-SemiBold.otf"),
    MontserratThin: require("../assets/fonts/MontserratAlt1-Thin.otf"),
  });

  return (
    <PaperProvider>
      <TextInput
        mode="outlined"
        style={{
          backgroundColor: darkBlue,
          paddingHorizontal: 10,
          width: 290,
        }}
        textColor={white}
        activeOutlineColor={yellow}
        outlineColor={white}
        placeholder={label}
        //  label={label}
        placeholderTextColor={white}
        outlineStyle={{
          borderRadius: 15,
          borderWidth: 1.5,
          borderStyle: "solid",
        }}
        value={value}
        onChangeText={onChange}
        right={<TextInput.Icon icon={icon} color={white} />}
      />
    </PaperProvider>
  );
}
