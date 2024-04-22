import BackScreen from "../components/BackScreen";
import React from "react";
import { View, Text } from "react-native";
import { Switch } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import Fonts from "../components/Fonts";
import ScreenTitle from "../components/ScreenTitle";
const DeviceInfoScreen = ({ route }) => {
  const [fontsLoaded] = useFonts(Fonts);

  const { deviceId } = route.params;

  const [fetched, setFetched] = useState({});
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const fetchDevice = async () => {
      try {
        const response = await axios.get(
          "http://192.168.56.1:5000/devices/" + deviceId
        );
        setFetched(response.data);
        setStatus(response.data.device?.state);
      } catch (error) {
        console.error("Error fetching devices:", error);
      }
    };

    fetchDevice();
  }, []);

  const deviceName = fetched.device?.deviceName;

  console.log(status);

  const toggleSwitch = () => {
    setStatus((previousState) => (previousState === "On" ? "Off" : "On"));
  };

  // Render the UI only when status is not null
  if (status === null || !fontsLoaded) {
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
            fontFamily: "MontserratBold",
            fontSize: 24,
          }}
        >
          Device name: {deviceName}
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
              fontFamily: "MontserratRegular",
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
