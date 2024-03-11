import React from "react";
import { ImageBackground, View } from "react-native";

const white="#FEFEFF";

function BackScreen({ children }) {
  return (
    <ImageBackground
      source={require("../assets/Group.png")}
      resizeMode="cover"
      style={{
        backgroundColor: white,
        height: "100%",
        flex: 1,
        resizeMode: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        {children}
      </View>
    </ImageBackground>
  );
}

export default BackScreen;
