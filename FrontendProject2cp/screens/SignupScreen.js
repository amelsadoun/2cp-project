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
import Logo from "../icons/Logo";
const white = "#FEFEFF";
const darkBlue = "#2F4062";
const yellow = "#F3F0A6";

function SignupScreen({ navigation }) {
  const [text, setText] = useState("");

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
          gap: 8,
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
            fontWeight: "medium",
            marginVertical: 10,
          }}
        >
          Create and account and backup all your devices
        </Text>
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
              border: "1.5px solid white",
              borderColor: "white",
              borderWidth: 1.5,
              borderStyle: "solid",
            }}
            value={text}
            onChangeText={(text) => setText(text)}
            label="Phone number"
            right={<TextInput.Icon icon="phone" />}
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
              border: "1.5px solid white",
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
              borderColor: white,
              borderWidth: 1.5,
              borderStyle: "solid",
            }}
            value={text}
            onChangeText={(text) => setText(text)}
            label="Confirm password"
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
