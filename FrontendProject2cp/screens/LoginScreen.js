import React from "react";
import { useState } from "react";
import { PaperProvider, TextInput } from "react-native-paper";
import {
  Pressable,
  Text,
  ScrollView,
  View,
  ImageBackground,
} from "react-native";

import { useFonts } from "expo-font";
import Logo from "../icons/Logo";
const white = "#FEFEFF";
const darkBlue = "#2F4062";
const yellow = "#F3F0A6";

function LoginScreen({ navigation }) {
  const [text, setText] = useState("");
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
            fontFamily: "MontserratLight",
          }}
        >
          Sign into you account and manage your device & accessory
        </Text>
        <PaperProvider>
          <TextInput
            mode="outlined"
            style={{
              backgroundColor: darkBlue,
              paddingHorizontal: 10,
              width: 290,
              color: white,
              textColor: white,
              placeholderTextColor: white,
            }}
            textColor={white}
            placeholderTextColor={white}
            activeOutlineColor={yellow}
            outlineStyle={{
              borderRadius: 15,
              borderColor: "white",
              borderWidth: 1.5,
              borderStyle: "solid",
            }}
            value={text}
            onChangeText={(text) => setText(text)}
            label="Email"
            right={<TextInput.Icon icon="email" />}
          />
        </PaperProvider>
        <PaperProvider>
          <TextInput
            mode="outlined"
            style={{
              backgroundColor: darkBlue,
              paddingHorizontal: 10,
              width: 290,
            }}
            textColor={white}
            placeholderTextColor={white}
            activeOutlineColor={yellow}
            outlineStyle={{
              borderRadius: 15,
              borderColor: "white",
              borderWidth: 1.5,
              borderStyle: "solid",
            }}
            value={text}
            onChangeText={(text) => setText(text)}
            label="Password"
            right={<TextInput.Icon icon="lock" />}
          />
        </PaperProvider>
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
              fontFamily:"MontserratBold",
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
              fontFamily: "MontserratExtraLight",
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
