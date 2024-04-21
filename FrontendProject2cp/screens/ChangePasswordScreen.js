import React from "react";
import BackScreen from "../components/BackScreen";
import ScreenTitle from "../components/ScreenTitle";
import { useState } from "react";
import EditingInput from "../components/EditingInput";
import { Pressable, ScrollView, Text } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { useFonts } from "expo-font";
const white = "#FEFEFF";
const darkBlue = "#2F4062";
import Fonts from "../components/Fonts";
import { Avatar } from "react-native-paper";
import { colors } from "../assets/colors";
export default function ChangePasswordScreen() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fontsLoaded] = useFonts(Fonts);
  const { isDarkMode } = useTheme();

  return (
    <BackScreen>
      <ScreenTitle title="Change Password"></ScreenTitle>
      <Avatar.Image
        style={{
          alignSelf: "center",
          marginBottom: 15,
        }}
        size={130}
        source={require("../assets/avatar.png")}
      />
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          gap: 20,
        }}
        style={{
          alignSelf: "center",
          flexDirection: "column",
          alignContent: "center",
          backgroundColor: isDarkMode ? colors.darkerBlue : colors.darkBlue,
          width: "105%",
          borderTopLeftRadius: 80,
          borderTopRightRadius: 80,
          paddingTop: 30,
        }}
      >
        <EditingInput
          label="Old password"
          icon="lock"
          hiddenText={true}
          value={oldPassword}
          onChange={(oldPassword) => setOldPassword(oldPassword)}
        ></EditingInput>
        <EditingInput
          label="New password"
          icon="lock"
          hiddenText={true}
          value={newPassword}
          onChange={(newPassword) => setNewPassword(newPassword)}
        ></EditingInput>
        <EditingInput
          label="Confirm new password"
          icon="lock"
          hiddenText={true}
          value={confirmPassword}
          onChange={(confirmPassword) => setConfirmPassword(confirmPassword)}
        ></EditingInput>
        <Pressable
          style={{
            backgroundColor: white,
            color: "black",
            width: 300,
            height: 46,
            textAlign: "center",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 6,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontFamily: "MontserratBold",
            }}
          >
            Save changes
          </Text>
        </Pressable>
      </ScrollView>
    </BackScreen>
  );
}
