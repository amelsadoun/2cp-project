import React, { useEffect, useState } from "react";
import { View, Text, Switch, Pressable, ActivityIndicator } from "react-native";
import axios from "axios";
import { useFonts } from "expo-font";
import BackScreen from "../components/BackScreen";
import Fonts from "../components/Fonts";
import { colors } from "../assets/colors";

const DeviceInfoScreen = ({ navigation, route }) => {
  const [fontsLoaded] = useFonts(Fonts);
  const { deviceId } = route.params;
  const [fetched, setFetched] = useState({});
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const fetchDevice = async () => {
      try {
        const response = await axios.get(
          `http://192.168.56.1:5000/devices/${deviceId}`
        );
        setFetched(response.data);
        setStatus(response.data.device?.state);
      } catch (error) {
        console.error("Error fetching device:", error);
      }
    };

    fetchDevice();
  }, []);

  const removeDevice = async () => {
    try {
      const response = await fetch(
        `http://192.168.56.1:5000/devices/${deviceId}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();

      if (response.ok) {
        console.log("Success", data.message);
      } else {
        console.error("Error", data.message);
      }
    } catch (error) {
      console.error("Error", "Internal Server Error");
    }
  };

  const updateDeviceStatus = async (newStatus) => {
    try {
      const response = await axios.put(
        `http://192.168.56.1:5000/devices/update/${deviceId}`,
        {
          state: newStatus ? "On" : "Off",
        }
      );

      if (response.ok) {
        console.log("Device status updated successfully");
      } else {
        console.error("Error updating device status:", response.data.error);
      }
    } catch (error) {
      console.error("Error updating device status:", error);
    }
  };

  const toggleSwitch = () => {
    const newStatus = status === "On" ? "Off" : "On";
    setStatus(newStatus);
    updateDeviceStatus(newStatus === "On");
  };

  const deviceName = fetched.device?.deviceName;

  if (status === null || !fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <BackScreen>
      <View style={{ alignItems: "center", paddingTop: 20 }}>
        <Text style={{ fontFamily: "MontserratBold", fontSize: 24 }}>
          Device name: {deviceName}
        </Text>
        <Switch
          trackColor={{ false: colors.red, true: colors.green }}
          thumbColor={status === "On" ? colors.green : colors.red}
          ios_backgroundColor={colors.blue}
          onValueChange={toggleSwitch}
          value={status === "On"}
        />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontFamily: "MontserratRegular", fontSize: 20 }}>
            The light is
          </Text>
          <Text
            style={{
              fontFamily: "MontserratBold",
              color: status === "On" ? colors.green : colors.red,
              fontSize: 20,
            }}
          >
            {status === "On" ? " on" : " off"}
          </Text>
        </View>
        <Pressable
          onPress={() => {
            removeDevice();
            navigation.goBack();
          }}
        >
          <Text style={{ fontFamily: "MontserratSemiBold", fontSize: 20 }}>
            remove
          </Text>
        </Pressable>
      </View>
    </BackScreen>
  );
};

export default DeviceInfoScreen;
