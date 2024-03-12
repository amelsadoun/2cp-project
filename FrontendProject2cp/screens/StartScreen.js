import { Pressable, Text, View, ImageBackground } from "react-native";
import LogoBig from "../icons/LogoBig";
const white = "#FEFEFF";
const darkBlue = "#2F4062";
const yellow = "#F3F0A6";


export default function StartScreen({ navigation }) {
    const buttons = [
      { label: "Log in", routeName: "Login screen" },
      { label: "Sign up", routeName: "Signup screen" },
      { label: "Use as guest", routeName: "Main screen" },
    ];
  
    return (
      <View
        style={{
            position: "absolute",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden",
          backgroundColor: white,
        }}
      >
        <ImageBackground
          source={require("../assets/Layer 4.png")}
          resizeMode="cover"
          style={{
            backgroundColor: white,
            marginTop: 30,
            height:400,
            paddingTop: 50,
            width: 300,
            alignSelf: "center",
            aspectRatio: 1,
            flex: 1,
            resizeMode: "cover",
            display: "flex",
          gap: 20,
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 36,
              fontFamily: "Poppins",
              color: darkBlue
            }}
          >
            Welcome to
          </Text>
          <LogoBig></LogoBig>
          <Text
            style={{
              fontSize: 25,
              fontFamily: "Poppins",
              fontWeight: "200",
              textAlign: "center",
              marginHorizontal: "13%",
            }}
          >
            one app for all smart home elements
          </Text>
        </ImageBackground>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: darkBlue,
            height: "42%",
            width: "105%",
            borderTopLeftRadius: 90,
            borderTopRightRadius: 90,
            paddingTop: 32,
            paddingBottom: "5%",
          gap: 16,
          }}
        >
          {buttons.map((item) => (
            <NavButton key={item.label} item={item} navigation={navigation}></NavButton>
          ))}
          <Pressable>
            <Text style={{
              color: yellow,
              textDecorationLine: 'underline',
            }}>need help?</Text>
          </Pressable>
        </View>
      </View>
    );
  }
  
  function NavButton({ navigation, item }) {
    return (
      <Pressable
        style={{
 borderColor: 'white',
    borderWidth: 1.5,
    borderStyle: 'solid',
        flex: 1,
          width: "66%",
          textAlign: "center",
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Roboto",
          fontSize: "medium",
          borderRadius: 20,
        }}
        onPress={() => navigation.navigate(item.routeName)}
      >
        <Text
          style={{
            fontSize: 20,
            color: white,
            fontWeight: "regular",
          }}
        >
          {item.label}
        </Text>
      </Pressable>
    );
  }
  