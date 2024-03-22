import React from "react";
import { View, Text, Dimensions, Image, Pressable } from "react-native";
import { useFonts } from "expo-font";
import Fonts from "./Fonts";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
export const screenHeight = Dimensions.get("window").height;
const white = "#FEFEFF";
const darkBlue = "#2F4062";
const yellow = "#F3F0A6";
const images = {
  image1: require("../assets/first start page.png"),
  image2: require("../assets/second start page.png"),
  image3: require("../assets/third start page.png"),
};

export default function CarouselCardItem({ item, index, navigation }) {
  const imageSource = images[item.imageKey];

  return (
    <View
      style={{
        width: ITEM_WIDTH,
        shadowColor: "#000",
        height: screenHeight,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 10,
        paddingBottom: "18%",
      }}
      key={index}
    >
      <Image
        source={imageSource}
        style={{
          width: ITEM_WIDTH,
          height: screenHeight,
          position: "absolute",
        }}
      />
      <Text
        style={{
          textAlign: "center",
          color: white,
          fontSize: 28,
          fontFamily: "MontserratBold",
          marginHorizontal: "5%",
          opacity: 0.9,
        }}
      >
        {item.title}
      </Text>
      <Text
        style={{
          fontFamily: "MontserratRegular",
          color: white,
          fontSize: 18,
          paddingLeft: 20,
          paddingLeft: 20,
          paddingRight: 20,
          textAlign: "center",
          marginHorizontal: "10%"
        }}
      >
        {item.body}
      </Text>
      <Pressable
        style={{
          position: "absolute",
          bottom: "10%"
        }}
        onPress={() => navigation.navigate("Main screen")}
      >
        <Text style={{color:white}}>{item.buttonText}</Text>
      </Pressable>
    </View>
  );
}
