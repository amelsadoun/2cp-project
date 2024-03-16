import BackScreen from "../components/BackScreen";
import React from "react";
import { View, Text } from "react-native";
import { Switch } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";

const DeviceInfoScreen = ({ route }) => {
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

  const { deviceId } = route.params;

  const [fetched, setFetched] = useState({});
  const [status, setStatus] = useState(null); // Initialize status as null initially

  useEffect(() => {
    const fetchDevice = async () => {
      try {
        const response = await axios.get(
          "http://192.168.56.1:5000/api/device/" + deviceId
        );
        setFetched(response.data);
        setStatus(response.data.device?.status); // Set status after fetching data
      } catch (error) {
        console.error("Error fetching devices:", error);
      }
    };

    fetchDevice();
  }, []);

  console.log(fetched.device);

  const toggleSwitch = () => {
    setStatus((previousState) => (previousState === "On" ? "Off" : "On"));
  };

  // Render the UI only when status is not null
  if (status === null) {
    return <ActivityIndicator />; // or any loading indicator
  }

  return (
    <BackScreen>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          paddingTop: 20,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontFamily: "MontserratBold",
            fontSize: 30,
          }}
        >
          Device: {fetched.device?.name}
        </Text>
        <Switch
          trackColor={{ false: "#red", true: "#green" }}
          thumbColor={status == "On" ? "#green" : "#red"}
          ios_backgroundColor="#blue"
          onValueChange={toggleSwitch}
          value={status == "On"}
        ></Switch>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontFamily: "MontserratLight",
              fontSize: 20,
            }}
          >
            The light is
          </Text>
          <Text
            style={{
              fontFamily: "MontserratBold",
              color: status == "On" ? "green" : "red",
              fontSize: 20,
            }}
          >
            {status == "On" ? " on" : " off"}
          </Text>
        </View>
      </View>
    </BackScreen>
  );
};

export default DeviceInfoScreen;
