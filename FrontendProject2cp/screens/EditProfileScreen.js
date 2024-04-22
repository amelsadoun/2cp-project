import React from "react";
import BackScreen from "../components/BackScreen";
import ScreenTitle from "../components/ScreenTitle";
import { useState } from "react";
import EditingInput from "../components/EditingInput";
import {
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { useFonts } from "expo-font";
const white = "#FEFEFF";
const darkBlue = "#2F4062";
import Fonts from "../components/Fonts";
import { Avatar } from "react-native-paper";
import { colors } from "../assets/colors";
export default function EditProfileScreen() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [fontsLoaded] = useFonts(Fonts);
  const { isDarkMode } = useTheme();


  return (
    <BackScreen>
      <ScreenTitle title="Edit Profile"></ScreenTitle>
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
          gap: 10,
        }}
        style={{
          alignSelf: "center",
          flexDirection: "column",
          alignContent: "center",
          backgroundColor: isDarkMode?colors.darkerBlue: colors.darkBlue,
          height: 20,
          width: "105%",
          borderTopLeftRadius: 80,
          borderTopRightRadius: 80,
          paddingTop: 25,
        }}
      ><EditingInput
      label="Name"
      icon="account"
      hiddenText={false}
      value={name}
      onChange={(name) => setName(name)}
    ></EditingInput>
        <EditingInput
          label="Email"
          icon="email"
          value={email}
          onChange={(email) => setEmail(email)}
        ></EditingInput>
        <EditingInput
          label="Phone number"
          icon="phone"
          value={phoneNumber}
          onChange={(phoneNumber) => setPhoneNumber(phoneNumber)}
        ></EditingInput>
        <EditingInput
          label="Country/Region"
          icon="account"
          value={country}
          onChange={(country) =>
            setCountry(country)
          }
        ></EditingInput>
        <Pressable
          style={{
            backgroundColor: white,
            color: "black",
            width: 300,
            height: 43,
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
