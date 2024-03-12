import React from "react";
import { useState } from "react";
import { PaperProvider, TextAuthentificationInput } from "react-native-paper";
import AuthentificationInput from "../components/AuthentificationInput";
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

function SignupScreen({ navigation }) {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

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
    <View
      style={{
        alignItems: "center",
        alignContent: "center",
        height: "100%",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        backgroundColor: white,
      }}
    >
      <View
        style={{
          position: "absolute",
          top: 40,
          right: 20,
        }}
      >
        <Logo></Logo>
      </View>
      <ImageBackground
        source={require("../assets/SignupBg.png")}
        resizeMode="cover"
        style={{
          backgroundColor: white,
          marginTop: "10%",
          zIndex: -1,
          height: 300,
          paddingTop: 50,
          width: "100%",
          alignSelf: "center",
          flex: 1,
          resizeMode: "cover",
          display: "flex",
          gap: 30,
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
        }}
      ></ImageBackground>
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
          backgroundColor: darkBlue,
          height: "45%",
          width: "105%",
          borderTopLeftRadius: 90,
          borderTopRightRadius: 90,
          paddingTop: 25,
          paddingBottom: 15,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            marginHorizontal: 60,
            color: white,
            fontFamily: "MontserratBold",
            marginVertical: 10,
            opacity: 0.75,
          }}
        >
          Create and account and backup all your devices
        </Text>
        <AuthentificationInput
          label="Email"
          icon="email"
          value={email}
          onChange={(email) => setEmail(email)}
        ></AuthentificationInput>
        <AuthentificationInput
          label="Phone number"
          icon="phone"
          value={phoneNumber}
          onChange={(phoneNumber) => setPhoneNumber(phoneNumber)}
        ></AuthentificationInput>
        <AuthentificationInput
          label="Password"
          icon="lock"
          value={password}
          onChange={(password) => setPassword(password)}
        ></AuthentificationInput>
        <AuthentificationInput
          label="Confirm password"
          icon="lock"
          value={passwordConfirmation}
          onChange={(passwordConfirmation) =>
            setPasswordConfirmation(passwordConfirmation)
          }
        ></AuthentificationInput>
        <Pressable
          style={{
            backgroundColor: white,
            color: "black",
            width: 280,
            height: 50,
            textAlign: "center",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 16,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Sign up
          </Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Login screen")}>
          <Text
            style={{
              color: yellow,
              textDecorationLine: "underline",
            }}
          >
            Already have an account? Log in
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

export default SignupScreen;
