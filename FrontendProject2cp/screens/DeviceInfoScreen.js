import React, { useEffect, useState } from "react";
import { View, Text, Switch, Pressable, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import BackScreen from "../components/BackScreen";
import Fonts from "../components/Fonts";
import { colors } from "../assets/colors";
import { deleteDevice, fetchDevices, updateDevice } from "../helpers";

const DeviceInfoScreen = ({ navigation, route }) => {
  const [fontsLoaded] = useFonts(Fonts);
  const { deviceId } = route.params;
  const [device, setDevice] = useState();
  const [status, setStatus] = useState(device?.deviceStatus);

  useEffect(() => {
    const fetchAndSetDevices = async () => {
      try {
        const fetchedDevices = await fetchDevices();
        fetchedDevices.forEach((item) => {
          if (item.id == deviceId) {
            setDevice(item);
          }
        });
      } catch (error) {
        console.error("Error fetching devices:", error);
      }
    };

    // Fetch devices when the component mounts
    fetchAndSetDevices();
  }, []);

  const toggleSwitch = () => {
    const newStatus = status === "On" ? "Off" : "On";
    setStatus(newStatus);
    updateDevice(device.deviceName, device.deviceType, newStatus, deviceId); // Use newStatus here
    console.log(newStatus); // Log newStatus instead of device?.deviceStatus
  };

  
  if (!fontsLoaded || !device) {
    return <ActivityIndicator />;
  }

  return (
    <BackScreen>
      <View style={{ alignItems: "center", paddingTop: 20 }}>
        <Text style={{ fontFamily: "MontserratBold", fontSize: 24 }}>
          Device name: {device.deviceName}
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
            deleteDevice(deviceId);
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
