import React from "react";
import { useState } from "react";
import { PaperProvider, TextInput } from "react-native-paper";
import AuthentificationInput from "../components/AuthentificationInput";
import {
  Pressable,
  Text,
  ScrollView,
  View,
  ImageBackground,
} from "react-native";
import Fonts from "../components/Fonts";
import { useFonts } from "expo-font";
import Logo from "../icons/Logo";
const white = "#FEFEFF";
const darkBlue = "#2F4062";
const yellow = "#F3F0A6";

function LoginScreen({ navigation }) {
  const [text, setText] = useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword] = useState("");

  const [fontsLoaded] = useFonts(Fonts);

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        overflow: "hidden",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
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
        source={require("../assets/HouseBgHigherOpacity.png")}
        resizeMode="cover"
        style={{
          backgroundColor: white,
          marginTop: "20%",
          height: 300,
          paddingTop: 50,
          width: 300,
          resizeMode: "cover",
          display: "flex",
          alignSelf: "center",
          flex: 1,
          opacity: 0.6,
          gap: 30,
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
        }}
      ></ImageBackground>
      <ScrollView
        contentContainerStyle={{
          gap: 11,
          alignItems: "center",
          justifyContent: "center",
        }}
        style={{
          alignSelf: "center",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          backgroundColor: darkBlue,
          height: "23%",
          width: 450,
          borderTopLeftRadius: 100,
          borderTopRightRadius: 100,
          paddingTop: 25,
          paddingBottom: "6%",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            marginHorizontal: 70,
            marginVertical: 12,
            color: white,
            opacity: 0.75,
            fontFamily: "MontserratRegular",
          }}
        >
          Sign into you account and manage your device & accessory
        </Text>
        <AuthentificationInput
          label="Email"
          icon="email"
          value={email}
          onChange={(email) => setEmail(email)}
        ></AuthentificationInput>
        <AuthentificationInput
          label="Password"
          icon="lock"
          hiddenText={true}
          value={password}
          onChange={(password) => setPassword(password)}
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
            marginBottom: 8,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily:"MontserratSemiBold",
            }}
          >
            Log in
          </Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Signup screen")}>
          <Text
            style={{
              color: yellow,
              textDecorationLine: "underline",
              fontFamily: "MontserratLight",
            }}
          >
            don't have an account? Sign up
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

export default LoginScreen;
